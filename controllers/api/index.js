const router = require('express').Router();
const userRoutes = require('./user-routes');
const plantRoutes = require('./plantRoutes');

// Routes for plant-related operations
router.use('/users', userRoutes);
router.use('/plants', plantRoutes);

module.exports = router;