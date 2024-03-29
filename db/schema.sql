DROP DATABASE IF EXISTS compendium_db;


CREATE DATABASE compendium_db;
const Sequelize = require('sequelize');
const config = require('./config');

module.exports = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql'
});
