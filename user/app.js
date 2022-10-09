const express = require('express');
const { login } = require('./src/controllers/controllers.user');
const { Error } = require('./src/middleware/middleware.error');
const { validateLogin } = require('./src/middleware/validate.login');
require('express-async-errors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4100;

app.use(express.json());

app.post('/login', validateLogin, login);

app.get('/', (_req, res) => res.status(200).json({
  bem_vindo: 'Seja Bem vindo a aplicação: User',
}));

app.use(Error);
app.listen(PORT, console.log('Rodando na porta ', PORT));
