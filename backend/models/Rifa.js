const mongoose = require('mongoose');

const rifaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precioBoleto: { type: Number, required: true },
  totalBoletos: { type: Number, required: true },
  boletosVendidos: { type: Number, default: 0 },
  estado: { type: String, enum: ['activa', 'finalizada', 'pendiente'], default: 'activa' },
  fechaSorteo: { type: Date, required: true },
  imagen: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Rifa', rifaSchema);
