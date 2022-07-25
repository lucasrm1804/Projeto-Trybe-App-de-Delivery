const express = require('express');

const admController = require('../controllers/adm');

const router = express.Router();

router
  .get('/adm/manage', admController.getAll)
  .post('/adm/manage', admController.registerUser);

module.exports = router;
