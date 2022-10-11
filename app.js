const express = require('express');
const proxy = require('express-http-proxy');
const morgan = require('morgan');
require('express-async-errors');
const cors = require('cors');

const app = express();

app.use(express.json());

const PORT = 4000;
app.use(
  morgan(':method - :url - status: :status - response time: :response-time ms ')
);

app.use('/user', proxy('http://localhost:3100'));
app.use('/product', proxy('http://localhost:3200'));
app.use('/signatures', proxy('http://localhost:3300'));

app.get('/', (_req, res) =>
  res.status(200).json({ bem_vindo: 'Seja Bem vindo a aplicação' })
);

app.listen(PORT, console.log('Rodando na porta ', PORT));
