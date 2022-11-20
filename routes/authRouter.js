const express = require('express');
const passport = require('passport');

const AuthService = require('../services/authService');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  loginSchema,
  recoveryPasswordSchema,
  changePasswordSchema,
} = require('../schemas/authSchema');

const router = express.Router();
const service = new AuthService();

router.post(
  '/login',
  validatorHandler(loginSchema, 'user'),
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

router.post('/recovery', async (req, res, next) => {
  validatorHandler(recoveryPasswordSchema, 'body')
  try {
    const { email } = req.body;
    const response = await service.sendRecovery(email);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.post('/change-password', async (req, res, next) => {
  validatorHandler(changePasswordSchema, 'body')
  try {
    const { token, newPassword } = req.body;
    const response = await service.changePassword(token, newPassword);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
