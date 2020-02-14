const express = require('express');

const projectRouter = require('../projects/projectRouter.js');
const actionRouter = require('../actions/actionRouter.js');

const server = express();

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>My Sprint Challenge Project<h2>`);
});

//Middleware
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.originalUrl} `
  );
  next();
}

module.exports = server;
