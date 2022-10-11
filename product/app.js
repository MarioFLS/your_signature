const express = require('express');
const path = require('path');
require('express-async-errors');
const { getAll, getById } = require('./src/controllers/controllers.product');
const { Error } = require('../userProducts/src/middleware/middleware.error');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4200;

const uploadDirectory = path.join(__dirname, 'public');

app.use('/images', express.static(uploadDirectory));

app.get('/', getAll);
app.get('/:id', getById);

app.use(Error);
app.listen(PORT, console.log('Rodando na porta ', PORT));
