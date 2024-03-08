// const express = require('express');
const router = require('express').Router();
// const router = express.Router();
const userRoutes = require('./user-routes');
const plantRoutes = require('./plant-routes');

// const apiControllers = require('../apiControllers'); // Import apiControllers module

// Import homeRoutes module
// const homeRoutes = require('../home-routes');

// Routes for plant-related operations
router.use('/users', userRoutes);
router.use('/plants', plantRoutes);

// router.use('/', homeRoutes);
// router.get('/data', apiControllers.getData); // Use getData as middleware

module.exports = router;