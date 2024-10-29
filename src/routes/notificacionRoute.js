const express = require('express');
const router = express.Router();

const notificacionController = require('../controllers/notificacionController');

router.get('/', notificacionController.getAll);


module.exports = router;