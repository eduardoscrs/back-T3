const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const pool = require('./config/db'); 
const usuarioRoutes = require('./routes/userRoute');

// Configura dotenv para manejar variables de entorno
dotenv.config();

const app = express();

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/api/usuarios', usuarioRoutes);

// Exporta la aplicación en lugar de iniciar el servidor aquí
module.exports = app;
