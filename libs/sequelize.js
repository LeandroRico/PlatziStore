const { Sequelize } = require('sequelize');

const { config } = require('../config');
const setupModels = require('../db/models');

const sequelize = new Sequelize(config.dbUrl, {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
});

setupModels(sequelize);

module.exports = sequelize;
