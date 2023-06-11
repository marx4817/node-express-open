const express = require("express");
const path = require('path');

const swaggerUi = require('swagger-ui-express');
const specs = require('./middleware/swagger-config.js');
require('dotenv').config();

//routes
const stuffRoutes = require('./routes/stuff');
const userRoutes = require("./routes/auth");

const mongoose = require('mongoose');

const app = express();

//database info
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;


//connect to atlas mongoDb
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.axbavin.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((errr) => console.log('Connexion à MongoDB échouée !', errr)
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//accepte the body in the request
app.use(express.json())

//use stuff route
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

app.use('/', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

module.exports = app;

