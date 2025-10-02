const express = require('express');
const Oportunidad = require('../models/Oportunidad');

const router = express.Router();

// Crear oportunidad
router.post('/', async (req, res) => {
  try {
    const oportunidad = new Oportunidad(req.body);
    await oportunidad.save();
    res.status(201).json(oportunidad);
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear oportunidad', error });
  }
});

// Listar oportunidades
router.get('/', async (req, res) => {
  try {
    const oportunidades = await Oportunidad.find();
    res.json(oportunidades);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener oportunidades', error });
  }
});

module.exports = router;
