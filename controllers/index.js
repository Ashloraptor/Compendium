const express = require('express');
const router = express.Router();
// const plantController = require('../controllers/plantController');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// Routes for plant-related operations
router.use('/', homeRoutes);
// router.post('/identify', plantController.identifyPlant);
// router.get('/:id', plantController.getPlantDetails);
router.use('api', apiRoutes);

module.exports = router;
