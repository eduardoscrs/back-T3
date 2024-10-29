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


const PrestadorServicio = sequelize.define('PrestadorServicio', {
    reg_prestador: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    rut: {
        type: DataTypes.STRING(11),
        allowNull: true,
    },
    id_servicio: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'PrestadorServicio',
    timestamps: false,
});

(async () => {
    await sequelize.sync();
})();

module.exports = PrestadorServicio;
