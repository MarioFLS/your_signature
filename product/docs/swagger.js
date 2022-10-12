const { byId } = require('./byId');
const { all } = require('./all');

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'API de Produtos',
    description: 'API guarda todos os produtos. Faz parte do Ecosistema do API your_signatures',
    version: '1.0.0',
  },
  servers: [{
    url: 'http://localhost:3200',
    description: 'Servidor Local',
  }],
  basePath: '/v1',
  paths: {
    '/all': all,
    '/{productId}': byId,
  },
};
