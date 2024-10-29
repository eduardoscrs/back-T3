const express = require('express');
const router = express.Router();

const formMoveReducidaController = require('../controllers/formMoveReducidaController');

router.get('/', formMoveReducidaController.getAll);
router.get('/:id', formMoveReducidaController.getById);


module.exports = router;
