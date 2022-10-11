const express = require('express');
const { newSignature } = require('./src/controllers/controller.signature');
const { tokenValidate } = require('./src/middleware/validate.token');
const { Error } = require('./src/middleware/middleware.error');
const { validateSignature } = require('./src/middleware/validate.create.signature');
const { closeDatabase } = require('./src/models/connection');
const { Signatures } = require('./src/models/signatures');
require('express-async-errors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4300;

app.use(express.json());
Signatures();

app.post('/new', validateSignature, tokenValidate, newSignature);

app.get('/', (_req, res) => res.status(200).json({
  bem_vindo: 'Seja Bem vindo a aplicação: User Product',
}));

app.use(Error);
app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));
closeDatabase();
