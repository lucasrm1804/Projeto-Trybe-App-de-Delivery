const express = require('express');

const saleOrderDetails = require('../controllers/orderDetails');

const router = express.Router();

router
  .get('/customer/orders/:id', saleOrderDetails.getSellerProduct);

module.exports = router;