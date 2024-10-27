const Usuario = require('../models/User'); 
const bcrypt = require('bcrypt');

const usuarioController = {
    getAll: async (req, res) => {
        try {
            const usuarios = await Usuario.findAll();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
        }
    },
    getById: async (req, res) => {
        const { rut } = req.params;
        try {
            const usuario = await Usuario.findByPk(rut);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.json(usuario);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
        }
    },
    create: async (req, res) => {
        const { rut, contrasena } = req.body;

        // Validación básica
        if (!rut || !contrasena) {
            return res.status(400).json({ message: 'RUT y contraseña son requeridos' });
        }

        try {
            // Encriptar la contraseña
            const hashedPassword = await bcrypt.hash(contrasena, 10);
            const newUsuario = await Usuario.create({ ...req.body, contrasena: hashedPassword });
            res.status(201).json(newUsuario);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
        }
    },
    update: async (req, res) => {
        const { rut } = req.params;
        try {
            const [updated] = await Usuario.update(req.body, { where: { rut } });
            if (!updated) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            const updatedUsuario = await Usuario.findByPk(rut);
            res.json(updatedUsuario);
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
        }
    },
    delete: async (req, res) => {
        const { rut } = req.params;
        try {
            const deleted = await Usuario.destroy({ where: { rut } });
            if (!deleted) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
        }
    },
};

module.exports = usuarioController;
