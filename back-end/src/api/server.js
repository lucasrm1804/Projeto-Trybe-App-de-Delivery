const port = process.env.PORT || 3001;
const app = require('./app');
require('dotenv').config();

app.listen(port);
console.log(`Api rodando na porta ${port}`);
