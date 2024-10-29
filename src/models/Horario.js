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

const Horario = sequelize.define('Horario', {
    id_hora: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    reg_prestador: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    fecha_hora: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    disponible: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
}, {
    tableName: 'Horario',
    timestamps: false,
});

(async () => {
    await sequelize.sync();
})();

module.exports = Horario;
