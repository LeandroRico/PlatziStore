const express = require('express');
const usersRouter = require('./usersRouter');
const customersRouter = require('./customersRouter');
const categoriesRouter = require('./categoriesRouter');
const productsRouter = require('./productsRouter');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/products', productsRouter);
};

module.exports = routerApi;
