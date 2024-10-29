const Notificacion = require('../models/Notificacion');
const sequelize = require('../config/db');

//revisar xd

const NotificacionController = async (req, res) => {
    try {
        const notificaciones = await Notificacion.findAll();
        res.json(notificaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener notificaciones', error: error.message });
    }
    
}

module.exports = NotificacionController;