const express = require('express');

const sellerOrderDetailsController = require('../controllers/sellerOrderDetails');

const router = express.Router();

router
  .get('/seller/orders/:id', sellerOrderDetailsController.getSale);

module.exports = router;