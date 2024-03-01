const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

// Routes for plant-related operations
router.post('/identify', plantController.identifyPlant);
router.get('/:id', plantController.getPlantDetails);

module.exports = router;
