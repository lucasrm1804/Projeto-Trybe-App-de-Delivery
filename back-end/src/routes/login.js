const express = require('express');

const loginController = require('../controllers/login');
const validation = require('../middleware/register.middleware');
const router = express.Router();

router.post(
    '/login',
    validation.emailValidation,
    validation.passwordValidation,
    loginController.loginController
    );

module.exports = router;