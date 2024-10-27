const Usuario = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
    login: async (req, res) => {
        const { rut, contrasena } = req.body;

        try {
            const usuario = await Usuario.findOne({ where: { rut } });
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            const isPasswordValid = await bcrypt.compare(contrasena, usuario.contrasena);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Contraseña incorrecta' });
            }

            const token = jwt.sign({ id: usuario.id, rut: usuario.rut }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: 'Inicio de sesión exitoso', token });
        } catch (error) {
            res.status(500).json({ message: 'Error en el inicio de sesión', error: error.message });
        }
    }
};

module.exports = authController;
