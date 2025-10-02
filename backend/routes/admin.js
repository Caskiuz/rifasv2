const express = require('express');
const requireRole = require('../middleware/requireRole');
const User = require('../models/User');
const Rifa = require('../models/Rifa');
const Pago = require('../models/Pago');

const router = express.Router();

// Ruta protegida: solo admin puede acceder
router.get('/dashboard', requireRole(['admin']), async (req, res) => {
  try {
    const totalUsuarios = await User.countDocuments();
    const totalRifas = await Rifa.countDocuments();
    const totalPagos = await Pago.countDocuments();
    res.json({ totalUsuarios, totalRifas, totalPagos });
  } catch (error) {
    res.status(500).json({ msg: 'Error en dashboard admin', error });
  }
});

module.exports = router;
