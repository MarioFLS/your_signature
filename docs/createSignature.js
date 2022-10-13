const createSignature = {
  post: {
    tags: ['Criar nova Assinatura'],
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary:
      'Permite a criação de assinatura para novos usuários através do Token',
    description:
      'Após inserir os dados corretamente seu Token e as propriedades das assinaturas',
    produces: ['application/json'],
    parameters: [
      {
        name: 'body',
        in: 'body',
        description: 'propiedades da assinatura',
        required: true,
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
            price: {
              type: 'number',
              example: 3500.98,
            },
          },
        },
      },
    ],
    requestBody: {
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
                price: {
                  type: 'number',
                  example: 3500.98,
                },
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: "Sucesso"
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

module.exports = { createSignature };
