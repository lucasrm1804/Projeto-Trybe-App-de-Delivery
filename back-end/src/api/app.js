const express = require('express');

const register = require('../routes/register');
const product = require('../routes/product');

const app = express();

app.use('/', express.json());

app.use(register);
app.use(product);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
