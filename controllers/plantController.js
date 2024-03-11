// controllers/plantController.js

const { Plant } = require('../models');

const plantController = {
  // Example method to handle getting all plants
  getAllPlants: async (req, res) => {
    try {
      const plants = await Plant.findAll();
      res.json(plants);
    } catch (err) {
      console.error('Error getting plants:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Example method to handle creating a new plant
  createPlant: async (req, res) => {
    const { name, description } = req.body;
    try {
      const newPlant = await Plant.create({ name, description });
      res.status(201).json(newPlant);
    } catch (err) {
      console.error('Error creating plant:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Add more methods as needed for your application's functionality
};

module.exports = plantController;
