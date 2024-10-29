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

const Servicio = sequelize.define('Servicio', {
    id_servicio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_servicio: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    tableName: 'Servicio',
    timestamps: false,
});

(async () => {
    await sequelize.sync();
})();

module.exports = Servicio;