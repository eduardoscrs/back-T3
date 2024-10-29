const FormMovReducida = require('../models/FormMovReducida');

const formMovReducidaController = {
    getAll: async (req, res) => {
        try {
            const formMovReducida = await FormMovReducida.findAll();
            res.json(formMovReducida);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener formMovReducida', error: error.message });
        }
    },
    getById: async (req
        , res) => {
        const { id } = req.params;
        try {
            const formMovReducida = await FormMovReducida.findByPk(id);
            if (!formMovReducida) {
                return res.status(404).json({ message: 'FormMovReducida no encontrada' });
            }
            res.json(formMovReducida);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la formMovReducida', error: error.message });
        }
    }
}   

module.exports = formMovReducidaController;