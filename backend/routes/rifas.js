const express = require('express');
const Rifa = require('../models/Rifa');

const router = express.Router();

// Crear rifa
router.post('/', async (req, res) => {
  try {
    const rifa = new Rifa(req.body);
    await rifa.save();
    res.status(201).json(rifa);
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear rifa', error });
  }
});

// Listar rifas
router.get('/', async (req, res) => {
  try {
    const rifas = await Rifa.find();
    res.json(rifas);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener rifas', error });
  }
});

// Obtener rifa por ID
router.get('/:id', async (req, res) => {
  try {
    const rifa = await Rifa.findById(req.params.id);
    if (!rifa) return res.status(404).json({ msg: 'Rifa no encontrada' });
    res.json(rifa);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener rifa', error });
  }
});

// Actualizar rifa
router.put('/:id', async (req, res) => {
  try {
    const rifa = await Rifa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rifa) return res.status(404).json({ msg: 'Rifa no encontrada' });
    res.json(rifa);
  } catch (error) {
    res.status(500).json({ msg: 'Error al actualizar rifa', error });
  }
});

// Eliminar rifa
router.delete('/:id', async (req, res) => {
  try {
    const rifa = await Rifa.findByIdAndDelete(req.params.id);
    if (!rifa) return res.status(404).json({ msg: 'Rifa no encontrada' });
    res.json({ msg: 'Rifa eliminada' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al eliminar rifa', error });
  }
});

module.exports = router;
