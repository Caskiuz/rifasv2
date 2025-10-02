const mongoose = require('mongoose');
const { Schema } = mongoose;

const PagoSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  rifa: { type: Schema.Types.ObjectId, ref: 'Rifa', required: true },
  stripeId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'mxn' },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pago', PagoSchema);
