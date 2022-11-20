const boom = require('@hapi/boom');

const { config } = require('../config');

const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
};

const checkRoles = (...roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      next(boom.forbidden());
    }
  };
};

module.exports = { checkApiKey, checkRoles };
