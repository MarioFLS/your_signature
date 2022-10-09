const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
  const secret = process.env.SECRET_PASSWORD;
  const { id, email, cpf } = user;
  const payload = { id, email, cpf };
  const token = jwt.sign(payload, secret, {
    expiresIn: '3h',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = { generateToken };
