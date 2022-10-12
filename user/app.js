const express = require('express');
const swaggerUI = require('swagger-ui-express');
const { login, create } = require('./src/controllers/controllers.user');
const { Error } = require('./src/middleware/middleware.error');
const { validateUser } = require('./src/middleware/validate.create.user');
const { validateLogin } = require('./src/middleware/validate.login');
const swaggerConfig = require('./docs/swagger');
require('express-async-errors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3100;

app.use(express.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));
app.post('/login', validateLogin, login);
app.post('/create', validateUser, create);

app.use(Error);

app.listen(
  PORT,
  console.log(`Rodando na porta ' ${PORT};`),
  console.log(`Link da documentação: http://localhost:${PORT}/docs`),
);
