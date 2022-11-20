const Joi = require('joi');

const email = Joi.string().email();
const password = Joi.string().min(8);
const token = Joi.string().alphanum()

const loginSchema = Joi.object({
  name: password.required(),
  email: email.required(),
});

const recoveryPasswordSchema = Joi.object({
  email: email.required(),
});

const changePasswordSchema = Joi.object({
  token: token.required(),
  newPassword: password.required()
});

module.exports = {
  loginSchema,
  recoveryPasswordSchema,
  changePasswordSchema,
};
