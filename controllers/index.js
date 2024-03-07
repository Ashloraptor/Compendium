// const express = require('express');
// const router = express.Router();
// // const plantController = require('../controllers/plantController');
// const apiRoutes = require('./apiControllers');
// const homeRoutes = require('./home-routes');
// // const apiController = require('../controllers/apiController');
// const apiController = require('../controllers/apiControllers');
// // Routes for plant-related operations
// // router.use('/', homeRoutes);
// // router.post('/identify', plantController.identifyPlant);
// // router.get('/:id', plantController.getPlantDetails);
// // router.use('api', apiRoutes);

// router.get('/api/data', apiController.getData);

// module.exports = router;

const express = require('express');
const router = express.Router();
// const plantController = require('../controllers/plantController');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const apiController = require('../controllers/apiControllers');
// Routes for plant-related operations
router.use('/', homeRoutes);
// router.post('/identify', plantController.identifyPlant);
// router.get('/:id', plantController.getPlantDetails);
router.use('api', apiRoutes);

module.exports = router;