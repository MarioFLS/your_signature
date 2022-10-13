const express = require('express');
const swaggerUI = require('swagger-ui-express');
const { newSignature, getSignatures } = require('./src/controllers/controller.signature');
const { tokenValidate } = require('./src/middleware/validate.token');
const { Error } = require('./src/middleware/middleware.error');
const { validateSignature } = require('./src/middleware/validate.create.signature');
const { closeDatabase } = require('./src/models/connection');
const swaggerConfig = require('./docs/swagger');
const { Signatures } = require('./src/models/signatures');
require('express-async-errors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4300;

app.use(express.json());
Signatures();

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.post('/create', validateSignature, tokenValidate, newSignature);

app.get('/user', tokenValidate, getSignatures);
app.all('*', swaggerUI.serve, swaggerUI.setup(swaggerConfig));
app.use(Error);
app.listen(
  PORT,
  console.log(`Rodando na porta ' ${PORT};`),
  console.log(`Link da documentação: http://localhost:${PORT}/docs`),
);
closeDatabase();
