const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const fetchRoutes = require('./fetch');
const plantRoutes = require('./plant-routes');
//router.use('/model', modelRoutes);
router.use('/categories', categoryRoutes);
router.use('/plants', plantRoutes);

module.exports = router;