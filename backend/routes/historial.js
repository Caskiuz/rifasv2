const express = require('express');
const Boleto = require('../models/Boleto');
const router = express.Router();

// Historial de rifas y boletos del usuario autenticado
router.get('/historial', async (req, res) => {
  try {
    // En producción, obtener usuario de req.user tras autenticación
    const usuarioId = req.user?._id || req.query.usuarioId;
    if (!usuarioId) return res.status(401).json({ msg: 'No autenticado' });
    const historial = await Boleto.find({ usuario: usuarioId }).populate('rifa');
    res.json(historial);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener historial', error });
  }
});

module.exports = router;
