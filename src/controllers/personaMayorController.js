const PersonaMayor = require('../models/PersonaMayor');

const personaMayorController = {
    getAll: async (req, res) => {
        try {
            const personasMayores = await PersonaMayor.findAll();
            res.json(personasMayores);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener personas mayores', error: error.message });
        }
    },
    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const personaMayor = await PersonaMayor.findByPk(id);
            if (!personaMayor) {
                return res.status(404).json({ message: 'Persona mayor no encontrada' });
            }
            res.json(personaMayor);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la persona mayor', error: error.message });
        }
    }
}

module.exports = personaMayorController;