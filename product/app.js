const express = require('express');
require('express-async-errors');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4200;
app.get('/', (_req, res) => res.status(200)
  .json({ bem_vindo: 'Seja Bem vindo a aplicação: Product' }));

app.listen(PORT, console.log('Rodando na porta ', PORT));
