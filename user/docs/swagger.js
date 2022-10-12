const { login } = require("./login");

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'API de Usuários',
    description: 'API guarda informação dos usuários. Faz parte do Ecosistema do API your_signatures',
    version: '1.0.0',
  },
  servers: [{
    url: 'http://localhost:3100',
    description: 'Servidor Local',
  }],
  basePath: '/v1',
  paths: {
    '/login': login
  },
};

