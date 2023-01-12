const express = require('express');
const usersRouter = require('./usersRouter');
const customersRouter = require('./customersRouter');
const categoriesRouter = require('./categoriesRouter');
const productsRouter = require('./productsRouter');
const ordersRouter = require('./ordersRouter');
const authRouter = require('./authRouter');
const profileRouter = require('./profileRouter');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/products', productsRouter);
  router.use('/orders', ordersRouter);
  router.use('/auth', authRouter);
  router.use('/profile', profileRouter);
};

module.exports = routerApi;
