const express = require('express');

const sellerOrderController = require('../controllers/sellerOrder');

const router = express.Router();

router
  .get('/seller/orders', sellerOrderController.getOrderByUser);

module.exports = router;
