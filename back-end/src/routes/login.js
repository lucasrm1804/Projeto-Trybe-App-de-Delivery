const express = require('express');

const loginController = require('../controllers/login');
const admController = require('../controllers/adm');

const router = express.Router();
router.get('/login', admController.getAdm);
router.post('/login', loginController);

module.exports = router;
