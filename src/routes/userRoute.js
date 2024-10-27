const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/userController'); 

// Define tus rutas
router.get('/', usuarioController.getAll);
router.get('/:rut', usuarioController.getById);
router.post('/', usuarioController.create);
router.put('/:rut', usuarioController.update);
router.delete('/:rut', usuarioController.delete);

module.exports = router;
