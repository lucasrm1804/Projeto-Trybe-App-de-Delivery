const express = require('express');

const registerController = require('../controllers/register');
const validation = require('../middleware/register.middleware');

const router = express.Router();

router.post(
  '/register',
  validation.nameValidation,
  validation.emailValidation,
  validation.passwordValidation,
  registerController.registerUser,
  );

module.exports = router;
