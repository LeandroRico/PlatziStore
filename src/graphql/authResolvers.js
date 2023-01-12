const AuthService = require('../services/authService');
const service = new AuthService();

const login = async (_, { email, password }, context) => {
  const { user } = await context.authenticate('graphql-local', {
    email,
    password,
  });
  return service.signToken(user);
};

module.exports = { login };
