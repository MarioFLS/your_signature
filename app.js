const express = require('express');
const swaggerUI = require('swagger-ui-express');
const proxy = require('express-http-proxy');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('express-async-errors');
const swaggerConfig = require('./docs/swagger');
const cors = require('cors');

const app = express();

app.use(express.json());

const PORT = 4000;

app.use(
  morgan(':method - :url - status: :status - response time: :response-time ms ')
);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.use('/user', proxy('http://localhost:3100'));
app.use('/product', proxy('http://localhost:3200'));
app.use('/signatures', proxy('http://localhost:3300'));

app.use("*", proxy(`http://localhost:${PORT}/docs`));
console.log('oi')

app.listen(
  PORT,
  console.log(`Rodando na porta ' ${PORT};`),
  console.log(`Link da documentação: http://localhost:${PORT}/docs`),
);

