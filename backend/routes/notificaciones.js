const express = require('express');
const enviarEmail = require('../utils/enviarEmail');
const User = require('../models/User');

const router = express.Router();

// Enviar notificación por email a un usuario
router.post('/email', async (req, res) => {
  const { userId, subject, text, html } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });
    await enviarEmail({ to: user.email, subject, text, html });
    res.json({ msg: 'Notificación enviada' });
  } catch (error) {
    res.status(500).json({ msg: 'Error enviando notificación', error });
  }
});

module.exports = router;
