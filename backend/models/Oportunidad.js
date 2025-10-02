const mongoose = require('mongoose');

const oportunidadSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  rifa: { type: mongoose.Schema.Types.ObjectId, ref: 'Rifa' },
  descuento: { type: Number, default: 0 },
  activa: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Oportunidad', oportunidadSchema);
