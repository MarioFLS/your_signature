const user = {
  get: {
    tags: ['Assinaturas do usuário'],
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary:
      'Permite o usuário ver suas assinaturas',
    description:
      'Após inserir o token do usuário ele poderá ver suas assinaturas',
    produces: ['application/json'],
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'array',
            items: {
              type: 'object',
              properties: {
                productId: {
                  type: 'number',
                  example: 1,
                },
                quantity: {
                  type: 'number',
                  example: 1,
                },
                productName: {
                  type: 'string',
                  example: 'iPhone 13 Max',
                },
                productImage: {
                  type: 'string',
                  example: 'o seu CPF',
                },
                signedIn: {
                  type: 'date',
                  example: '10/06/2022',
                },
              },
            },
          },
          },
        },
      },
      400: {
        description: 'BAD_REQUEST',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Esse token está inválido, não pertece a nenhum usuario'
                },
              },
            },
          },
        },
      },
      401: {
        description: 'BAD_REQUEST',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Você precisa inserir um token para seguir adiante.'
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = { user };
