const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/userController');
const authController = require('../controllers/authController');

// Rutas para usuarios
router.get('/', usuarioController.getAll);
router.get('/:rut', usuarioController.getById);
router.post('/', usuarioController.create);
router.put('/:rut', usuarioController.update);
router.delete('/:rut', usuarioController.delete);

// Ruta para autenticación
router.post('/login', authController.login);

module.exports = router;
