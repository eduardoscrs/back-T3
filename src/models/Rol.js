const {Sequelize, DataTypes} = require('sequelize');
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

const Rol = sequelize.define('Rol', {
    rol: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_rol: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
}, {
    tableName: 'Rol',
    timestamps: false,
});

(async () => {
    await sequelize.sync();
})();

module.exports = Rol;