const express = require('express');
const usersRouter = require('./usersRouter');
const customersRouter = require('./customersRouter');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
};

module.exports = routerApi;
