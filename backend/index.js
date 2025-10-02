
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas
app.use('/api/boletos', require('./routes/historial'));
// Pagos
app.use('/api/pagos', require('./routes/pagos'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/auth', require('./routes/recuperarPassword'));
app.use('/api/rifas', require('./routes/rifas'));
app.use('/api/boletos', require('./routes/boletos'));
app.use('/api/vendedores', require('./routes/vendedores'));
app.use('/api/oportunidades', require('./routes/oportunidades'));
app.use('/api/descuentos', require('./routes/descuentos'));
app.use('/api/promociones', require('./routes/promociones'));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API de Rifas funcionando');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en puerto ${PORT}`);
});
