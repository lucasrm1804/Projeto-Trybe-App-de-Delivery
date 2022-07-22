const express = require('express');

const saleController = require('../controllers/checkout');

const router = express.Router();

router
  .post('/customer/checkout', saleController.createSela)
  .get('/customer/checkout', saleController.getSeller);

module.exports = router;
