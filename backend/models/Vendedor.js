const mongoose = require('mongoose');

const vendedorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  rifas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rifa' }],
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Vendedor', vendedorSchema);
