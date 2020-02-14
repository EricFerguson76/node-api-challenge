const express = require('express');

const projectRouter = require('../projects/projectRouter.js');
const actionRouter = require('../actions/actionRouter.js');

const server = express();

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
  res.send(`<h2>My Sprint Challenge Project<h2>`);
});

module.exports = server;
