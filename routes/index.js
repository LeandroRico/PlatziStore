const express = require('express');
const userRouter = require('./usersRouter');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
};

module.exports = routerApi;
