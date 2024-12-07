const express = require('express');
const dotenv = require('dotenv');
const routes = require('./src/route/index');
const cors = require('cors');

dotenv.config();

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.use('/api', routes);

module.exports = app;