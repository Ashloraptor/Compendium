const Sequelize = require('sequelize');
const db = require('../config/database');

const Plant = db.define('plant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // Add more attributes as needed
});

module.exports = Plant;
