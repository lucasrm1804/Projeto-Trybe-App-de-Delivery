const express = require('express');

const orderController = require('../controllers/order');

const router = express.Router();

router
  .get('/customer/orders', orderController.getOrderByUser);

module.exports = router;