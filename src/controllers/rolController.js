const Rol = require('../models/rolModel');

const rolController = {
    getAll: async (req, res) => {
        try {
            const roles = await Rol.findAll();
            res.json(roles);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener roles', error: error.message });
        }
    },
    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const rol = await Rol.findByPk(id);
            if (!rol) {
                return res.status(404).json({ message: 'Rol no encontrado' });
            }
            res.json(rol);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el rol', error: error.message });
        }
    }
}

module.exports = rolController;
