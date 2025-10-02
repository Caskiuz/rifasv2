const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Pago = require('../models/Pago');

// Crear un pago con Stripe
exports.crearPago = async (req, res) => {
  const { amount, currency, description, source, userId, rifaId } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount,
      currency,
      description,
      source,
    });
    // Guardar pago en la base de datos
    const pago = new Pago({
      user: userId,
      rifa: rifaId,
      stripeId: charge.id,
      amount,
      currency,
      status: charge.status,
      createdAt: new Date(),
    });
    await pago.save();
    res.status(201).json({ success: true, pago });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Obtener pagos de un usuario
exports.obtenerPagosUsuario = async (req, res) => {
  try {
    const pagos = await Pago.find({ user: req.params.userId }).populate('rifa');
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
