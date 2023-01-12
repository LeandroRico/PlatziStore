const boom = require('@hapi/boom');

const checkRolesGql = (user, ...roles) => {
  if (!roles.includes(user.role)) {
    throw boom.unauthorized('You are not authorized');
  }
};

module.exports = checkRolesGql;
