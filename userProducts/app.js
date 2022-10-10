const express = require('express');
require('express-async-errors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4300;

app.use(express.json());

app.get('/', (_req, res) =>
  res.status(200).json({
    bem_vindo: 'Seja Bem vindo a aplicação: User Product',
  })
);

app.listen(PORT, console.log('Rodando na porta ', PORT));
