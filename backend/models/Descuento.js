const mongoose = require('mongoose');

const descuentoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  porcentaje: { type: Number, required: true },
  rifa: { type: mongoose.Schema.Types.ObjectId, ref: 'Rifa' },
  activa: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Descuento', descuentoSchema);
