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

const PersonaMayor = sequelize.define('PersonaMayor', {
    reg_paciente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    rut: {
        type: DataTypes.STRING(11),
        allowNull: true,
    },
    f_nac: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    direccion: {
        type: DataTypes.STRING(40),
        allowNull: true,
    },
    reg_soc_hogar: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    mov_reducida: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    cont_atenciones: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'PersonaMayor',
    timestamps: false,
});

(async () => {
    await sequelize.sync();
})();

module.exports = PersonaMayor;
