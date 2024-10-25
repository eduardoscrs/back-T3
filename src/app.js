const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const pool = require('./config/db'); // Cambia a la ruta de tu archivo de conexión MySQL

// Configura dotenv para manejar variables de entorno
dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

// Middleware para manejar las peticiones


// Rutas


// Exporta la aplicación en lugar de iniciar el servidor aquí
module.exports = app;
