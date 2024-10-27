const Cita = require('../models/Cita');
const bcrypt = require('bcrypt');
const { getAll } = require('./userController');

const citaController = {
    getAll: async (req, res) => {
        try {
            const citas = await Cita.findAll();
            res.json(citas);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener citas', error: error.message });
        }
    },
    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const cita = await Cita.findByPk(id);
            if (!cita) {
                return res.status(404).json({ message: 'Cita no encontrada' });
            }
            res.json(cita);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la cita', error: error.message });
        }
    },
    create: async (req, res) => {
        const { reg_paciente, id_hora } = req.body;

        if (!reg_paciente || !id_hora) {
            return res.status(400).json({ message: 'Registro de paciente e ID de hora son requeridos' });
        }

        try {
            const newCita = await Cita.create(req.body);
            res.status(201).json({ message: 'Cita creada con éxito', cita: newCita });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear la cita', error: error.message });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        const data = req.body;

        try {
            const [updated] = await Cita.update(data, { where: { id } });
            if (!updated) {
                return res.status(404).json({ message: 'Cita no encontrada' });
            }

            res.json({ message: 'Cita actualizada con éxito' });
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar la cita', error: error.message });
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const deleted = await Cita.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).json({ message: 'Cita no encontrada' });
            }

            res.json({ message: 'Cita eliminada con éxito' });
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar la cita', error: error.message });
        }
    }
}; 

module.exports = citaController;