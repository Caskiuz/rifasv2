const mongoose = require('mongoose');

const boletoSchema = new mongoose.Schema({
  numero: { type: Number, required: true },
  rifa: { type: mongoose.Schema.Types.ObjectId, ref: 'Rifa', required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  estado: { type: String, enum: ['disponible', 'reservado', 'vendido'], default: 'disponible' },
  voucher: { type: String },
  fechaCompra: { type: Date },
});

module.exports = mongoose.model('Boleto', boletoSchema);
