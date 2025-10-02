const express = require('express');
const Vendedor = require('../models/Vendedor');

const router = express.Router();

// Crear vendedor
router.post('/', async (req, res) => {
  try {
    const vendedor = new Vendedor(req.body);
    await vendedor.save();
    res.status(201).json(vendedor);
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear vendedor', error });
  }
});

// Listar vendedores
router.get('/', async (req, res) => {
  try {
    const vendedores = await Vendedor.find();
    res.json(vendedores);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener vendedores', error });
  }
});

module.exports = router;
