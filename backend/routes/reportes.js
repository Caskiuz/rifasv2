const express = require('express');
const Reporte = require('../models/Reporte');
const Rifa = require('../models/Rifa');
const Vendedor = require('../models/Vendedor');
const Pago = require('../models/Pago');

const router = express.Router();

// Reporte de ventas por rifa
router.get('/ventas-rifa/:rifaId', async (req, res) => {
  try {
    const pagos = await Pago.find({ rifa: req.params.rifaId });
    res.json({ total: pagos.length, pagos });
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener ventas por rifa', error });
  }
});

// Reporte de ventas por vendedor
router.get('/ventas-vendedor/:vendedorId', async (req, res) => {
  try {
    const pagos = await Pago.find({ vendedor: req.params.vendedorId });
    res.json({ total: pagos.length, pagos });
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener ventas por vendedor', error });
  }
});

// Resumen general
router.get('/resumen', async (req, res) => {
  try {
    const totalRifas = await Rifa.countDocuments();
    const totalVendedores = await Vendedor.countDocuments();
    const totalPagos = await Pago.countDocuments();
    res.json({ totalRifas, totalVendedores, totalPagos });
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener resumen', error });
  }
});

module.exports = router;
