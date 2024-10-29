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

const Notificacion = sequelize.define('Notificacion', {
    id_noti: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    reg_prestador: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    reg_paciente: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_cita: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    tipo_noti: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    texto: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    f_envio: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'Notificacion',
    timestamps: false,
});

(async () => {
    await sequelize.sync();
})();

module.exports = Notificacion;
