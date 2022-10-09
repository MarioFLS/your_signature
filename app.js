const express = require('express');
require('express-async-errors');
const cors = require('cors');

const app = express();

/* app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
}); */

const PORT = 4000;
app.get('/', (_req, res) =>
  res.status(200).json({ bem_vindo: 'Seja Bem vindo a aplicação' })
);

app.listen(PORT, console.log('Rodando na porta ', PORT));
