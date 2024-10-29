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

const FormMovReducida = sequelize.define('FormMovReducida', {
    id_form: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    reg_paciente: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    tipo: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    acompañante: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
}, {
    tableName: 'FormMovReducida',
    timestamps: false,
});

(async () => {
    await sequelize.sync();
})();

module.exports = FormMovReducida;