const express = require('express');
const router = express.Router();

const horarioController = require('../controllers/horarioController');

router.get('/', horarioController.getAll);
router.get('/:id', horarioController.getById);
router.post('/', horarioController.create);
router.put('/:id', horarioController.update);
router.delete('/:id', horarioController.delete);


module.exports = router;
