const router = require('express').Router();
// const plantController = require('../controllers/plantController');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const apiController = require('./apiControllers');
// Routes for plant-related operations
router.use('/', homeRoutes);
// router.post('/identify', plantController.identifyPlant);
// router.get('/:id', plantController.getPlantDetails);
router.use('/api', apiRoutes);
// router.use('/apiControllers', apiController);

module.exports = router;