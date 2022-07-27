const express = require('express');

const cors = require('cors');

const register = require('../routes/register');
const product = require('../routes/product');
const login = require('../routes/login');
const checkout = require('../routes/checkout');
const orderDetails = require('../routes/orderDetails');
const adm = require('../routes/adm');
const order = require('../routes/order');
const sellerOrder = require('../routes/sellerOrder');

const app = express();
app.use(cors());
app.use(express.static('public'));

app.use('/', express.json());

app.use(login);
app.use(register);
app.use(product);
app.use(checkout);
app.use(orderDetails);
app.use(adm);
app.use(order);
app.use(sellerOrder);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
