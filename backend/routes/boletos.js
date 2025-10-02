const express = require('express');
const Boleto = require('../models/Boleto');
const Rifa = require('../models/Rifa');

const router = express.Router();

// Reservar/Comprar boleto
router.post('/', async (req, res) => {
  try {
    const { numero, rifaId, usuarioId, voucher } = req.body;
    let boleto = await Boleto.findOne({ numero, rifa: rifaId });
    if (!boleto) {
      boleto = new Boleto({ numero, rifa: rifaId });
    }
    if (boleto.estado === 'vendido') return res.status(400).json({ msg: 'Boleto ya vendido' });
    boleto.usuario = usuarioId;
    boleto.estado = 'reservado';
    boleto.voucher = voucher;
    boleto.fechaCompra = new Date();
    await boleto.save();
    await Rifa.findByIdAndUpdate(rifaId, { $inc: { boletosVendidos: 1 } });
    res.status(201).json(boleto);
  } catch (error) {
    res.status(500).json({ msg: 'Error al reservar/comprar boleto', error });
  }
});

// Listar boletos de una rifa
router.get('/rifa/:rifaId', async (req, res) => {
  try {
    const boletos = await Boleto.find({ rifa: req.params.rifaId });
    res.json(boletos);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener boletos', error });
  }
});

// Verificar boleto
router.get('/:id', async (req, res) => {
  try {
    const boleto = await Boleto.findById(req.params.id).populate('rifa usuario');
    if (!boleto) return res.status(404).json({ msg: 'Boleto no encontrado' });
    res.json(boleto);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener boleto', error });
  }
});

module.exports = router;
