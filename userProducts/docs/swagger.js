const { create } = require('./create');
const { user } = require('./user');

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'API de Assinaturas',
    description: 'API guarda informação das assinaturas dos usuários. Faz parte do Ecosistema do API your_signatures',
    version: '1.0.0',
  },
  servers: [{
    url: 'http://localhost:3300',
    description: 'Servidor Local',
  }],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  basePath: '/v1',
  paths: {
    '/create': create,
    '/user': user,
  },
};
