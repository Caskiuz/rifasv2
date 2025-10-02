const express = require('express');
const User = require('../models/User');
const nodemailer = require('nodemailer');
const router = express.Router();

// Recuperar contraseña
router.post('/recuperar-password', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(200).json({ msg: 'Si el email existe, recibirás instrucciones.' });
  // Generar token simple (en producción usar JWT seguro)
  const token = Math.random().toString(36).substring(2, 15);
  user.resetToken = token;
  user.resetTokenExp = Date.now() + 3600000;
  await user.save();
  // Enviar email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Recupera tu contraseña',
    text: `Usa este token para recuperar tu contraseña: ${token}`
  });
  res.json({ msg: 'Si el email existe, recibirás instrucciones.' });
});

module.exports = router;
