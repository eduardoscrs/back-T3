const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT
    }
);

// Definición del modelo
const Usuario = sequelize.define('Usuario', {
  rut: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Verifica que no exista otro usuario con el mismo RUT
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apellido_paterno: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apellido_materno: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.INTEGER,
    allowNull: false, // 1 (Admin), 2 (Prestador de Servicio), 3 (Persona Mayor)
  },
});

// Sincroniza el modelo con la base de datos
(async () => {
  await sequelize.sync();
})();

module.exports = Usuario; // Exporta el modelo para poder usarlo en otros archivos
