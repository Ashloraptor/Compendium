const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');
const apiRoutes = require('./api');

// Routes for plant-related operations
router.post('/identify', plantController.identifyPlant);
router.get('/:id', plantController.getPlantDetails);
router.use('api', apiRoutes);

module.exports = router;
