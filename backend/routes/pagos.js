const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const router = express.Router();
const pagosController = require('../controllers/pagosController');

// Crear sesión de pago (Stripe Checkout)
router.post('/create-session', async (req, res) => {
  const { amount, email } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Boleto de rifa' },
          unit_amount: amount * 100,
        },
        quantity: 1,
      }],
      mode: 'payment',
      customer_email: email,
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ msg: 'Error creando sesión de pago', error });
  }
});

// Crear pago y guardar en base de datos
router.post('/', pagosController.crearPago);

// Obtener pagos de un usuario
router.get('/usuario/:userId', pagosController.obtenerPagosUsuario);

module.exports = router;
