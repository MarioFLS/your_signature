const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const cors = require('cors');
const swaggerConfig = require('./docs/swagger');
require('express-async-errors');
const { getAll, getById } = require('./src/controllers/controllers.product');
const { Error } = require('./middleware/middleware.error');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3200;

const uploadDirectory = path.join(__dirname, 'public');

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.get('/all', getAll);
app.get('/:id', getById);
app.use('/images', express.static(uploadDirectory));
app.all('*', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.use(Error);
app.listen(
  PORT,
  console.log(`Rodando na porta ' ${PORT};`),
  console.log(`Link da documentação: http://localhost:${PORT}/docs`),
);
