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

const Cita = sequelize.define('Cita', {
    id_cita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    reg_paciente: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_hora: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    asistencia: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    comentario: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    cont_asistencia: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
}, {
    timestamps: false // Desactiva los campos createdAt y updatedAt
});

(async () => {
    await sequelize.sync();
})();

module.exports = Cita;
