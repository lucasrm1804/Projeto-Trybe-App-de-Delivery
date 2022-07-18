const express = require('express');

const register = require('../routes/register');
const login = require('../routes/login');

const app = express();

app.use('/', express.json());

app.use(login);
app.use(register);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
