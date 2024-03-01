var APIRootURL = 'https://plant.id/api/v3';
//var APIKey = 
var parameters = '/identification?details=common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering&language={{LANGUAGE}}';
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');
const config = require('./config/config');
const plantRoutes = require('./routes/plantRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Routes
app.use('/plants', plantRoutes);
app.use('/users', userRoutes);

// Connect to database
db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
