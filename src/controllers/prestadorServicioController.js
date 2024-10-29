const PrestadorServicio = require('../models/PrestadorServicio');

const prestadorServicioController = {
    getAll: async (req, res) => {
        try {
            const prestadoresServicios = await PrestadorServicio.findAll();
            res.json(prestadoresServicios);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener prestadores de servicios', error: error.message });
        }
    },
    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const prestadorServicio = await PrestadorServicio.findByPk(id);
            if (!prestadorServicio) {
                return res.status(404).json({ message: 'Prestador de servicio no encontrado' });
            }
            res.json(prestadorServicio);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el prestador de servicio', error: error.message });
        }
    }
}

module.exports = prestadorServicioController;