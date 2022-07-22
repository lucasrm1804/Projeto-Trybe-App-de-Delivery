const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

const secretKey = readFileSync('jwt.evaluation.key', 'utf-8');
const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

const generateToken = (email) => {
  const token = jwt.sign({ email }, secretKey, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  const tokenStatus = jwt.verify(token, secretKey);
  return tokenStatus;
};

module.exports = {
  generateToken,
  verifyToken,
};