const express = require('express');
const Promocion = require('../models/Promocion');

const router = express.Router();

// Crear promoción
router.post('/', async (req, res) => {
  try {
    const promocion = new Promocion(req.body);
    await promocion.save();
    res.status(201).json(promocion);
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear promoción', error });
  }
});

// Listar promociones
router.get('/', async (req, res) => {
  try {
    const promociones = await Promocion.find();
    res.json(promociones);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener promociones', error });
  }
});

module.exports = router;
