const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();
require('dotenv').config();

const cohortsRouter = require('../cohorts/router');
const studentRouter = require('../students/router');

// middleware
server.use(express.json());
server.use(helmet());
server.use(cors());

// routes
server.use('/api/cohorts', cohortsRouter);
server.use('/api/students', studentRouter);

server.get('/', (req, res) => {
  res.json({ api: 'up' });
});

module.exports = server;
