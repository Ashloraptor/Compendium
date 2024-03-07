const express = require('express');
const router = express.Router();
const apiControllers = require('../apiControllers'); // Import apiControllers module

// Import homeRoutes module
const homeRoutes = require('../home-routes');

// Routes for plant-related operations
router.use('/', homeRoutes);
router.get('/data', apiControllers.getData); // Use getData as middleware

module.exports = router;