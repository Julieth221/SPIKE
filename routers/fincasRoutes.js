const express = require('express');
const router = express.Router();
const fincasController = require('../controllers/fincasController');

router.get('/', fincasController.getAllFincas);
router.post('/', fincasController.createFinca);
router.put('/:id', fincasController.updateFinca);
router.delete('/:id', fincasController.deleteFinca);

module.exports = router;