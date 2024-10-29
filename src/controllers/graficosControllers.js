const { Cita} = require('../models/Cita');
const { Horario } = require('../models/Horario');
const sequelize = require('../config/db');

// Obtener los datos de atenciones mensuales
const AtencionesMensuales = async (req, res) => {
    try {
        const resultado = await Cita.findAll({
            attributes: [
                [sequelize.fn('MONTH', sequelize.col('Horario.fecha_hora')), 'mes'],
                [sequelize.fn('COUNT', sequelize.col('*')), 'total_atenciones']
            ],
            include: {
                model: Horario,
                attributes: []
            },
            where: {
                asistencia: true
            },
            group: ['mes'],
            order: [[sequelize.literal('mes'), 'ASC']]
        });
        res.json(resultado);
    } catch (err) {
        console.error('Error al obtener atenciones mensuales:', err);
        res.status(500).json({ error: 'Error al obtener los datos de atenciones' });
    }
};

module.exports = {
    AtencionesMensuales,
};