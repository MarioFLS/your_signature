const { user } = require("./user");
const { all } = require("./all");
const { byId } = require("./byId");
const { create } = require("./create");
const { createSignature } = require("./createSignature");
const { login } = require("./login");

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'API de Usuários',
    description: 'API guarda informação dos usuários. Faz parte do Ecosistema do API your_signatures',
    version: '1.0.0',
  },
  servers: [{
    url: 'http://localhost:4000',
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
    '/user/login': login,
    '/user/create': create,
    '/product/all': all,
    '/product/{productId}': byId,
    '/signatures/create': createSignature,
    '/signatures/user': user,
  },
};

