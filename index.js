const express = require('express'),
  uui = require('uuid'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  cors = require('cors');

const Models = require('./database/models');

mongoose.connect('mongodb://localhost:27017', {useNewURLParser: true, useUnifiedTopology: true});

const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//API Endpoints
app.get('/', (req, res) => {
  res.send('Welcome!!');
});

//API Endpoint that returns all clothes
app.get('/clothes', (req, res) => {
  Models.Clothes.find()
  .then(clothes => {
    res.status(200).json(clothes);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send('Error: ' + err);
  });
});

//API Endpoint that returns single item
//code here

//Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong!');
});

//Server
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});