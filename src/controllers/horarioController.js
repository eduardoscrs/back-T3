const Horario = require('../models/Horario');
const sequelize = require('../config/db');
//revisar si es necesario importar algo más

const HorarioController = {
    getAll: async (req, res) => {
        try {
            const horarios = await Horario.findAll();
            res.json(horarios);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener horarios', error: error.message });
        }
    },
    
    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const horario = await Horario.findByPk(id);
            if (!horario) {
                return res.status(404).json({ message: 'Horario no encontrado' });
            }
            res.json(horario);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el horario', error: error.message });
        }
    },

    create: async (req, res) => {
        const { fecha_hora, id_hora } = req.body;

        if (!fecha_hora || !id_hora) {
            return res.status(400).json({ message: 'Fecha y hora e ID de hora son requeridos' });
        }

        try {
            const newHorario = await Horario.create(req.body);
            res.status(201).json({ message: 'Horario creado con éxito', horario: newHorario });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el horario', error: error.message });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        const data = req.body;

        try {
            const [updated] = await Horario.update(data, { where: { id } });
            if (!updated) {
                return res.status(404).json({ message: 'Horario no encontrado' });
            }

            res.json({ message: 'Horario actualizado con éxito' });
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el horario', error: error.message });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const deleted = await Horario.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).json({ message: 'Horario no encontrado' });
            }

            res.json({ message: 'Horario eliminado con éxito' });
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el horario', error: error.message });
        }
    }

};

module.exports = HorarioController;
