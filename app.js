const express = require('express');
const app = express();
const apiController = require('./controllers/apiControllers');
const dotenvConfig = require('./config/dotenv');


app.get('/api/data', apiController.getData);


app.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

module.exports = app;