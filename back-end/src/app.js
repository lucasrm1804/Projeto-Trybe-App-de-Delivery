const express = require('express');

const app = express();

app.use('/', express.json());

app.get('/', (_request, response) => 
  response.send({ status: 'Vivo!' }));

export default app;
