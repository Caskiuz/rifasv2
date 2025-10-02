const express = require('express');
const Descuento = require('../models/Descuento');

const router = express.Router();

// Crear descuento
router.post('/', async (req, res) => {
  try {
    const descuento = new Descuento(req.body);
    await descuento.save();
    res.status(201).json(descuento);
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear descuento', error });
  }
});

// Listar descuentos
router.get('/', async (req, res) => {
  try {
    const descuentos = await Descuento.find();
    res.json(descuentos);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener descuentos', error });
  }
});

module.exports = router;
