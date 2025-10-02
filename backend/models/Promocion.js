const mongoose = require('mongoose');

const promocionSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  rifa: { type: mongoose.Schema.Types.ObjectId, ref: 'Rifa' },
  activa: { type: Boolean, default: true },
  fechaInicio: { type: Date },
  fechaFin: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Promocion', promocionSchema);
