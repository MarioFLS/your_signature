const byId = {
  get: {
    tags: ['Busca o produto pelo ID'],
    summary:
      'Permite o usuário Buscar um Produto por ID',
    description:
      'Após inserir o ID do produto, retorna o produto com o ID especificado',
    produces: ['application/json'],
    parameters: [
      {
        name: 'productId',
        in: 'path',
        required: true,
        type: 'number',
        example: 1
      },
    ],
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'number',
                  example: 1
                },
                name: {
                  type: 'string',
                  example: 'iPhone 13'
                },
                price: {
                  type: 'number',
                  example: 4397.07
                },
                urlImage: {
                  type: 'string',
                  example: "http://localhost:3200/images/iPhone-13-Pro-Max.png"
                },
                memoryType1: {
                  type: 'number',
                  example: 64
                },
                memoryType2: {
                  type: 'number',
                  example: null
                },
                memoryType3: {
                  type: 'number',
                  example: null
                },
              },
            },
          },
        },
      },
        404: {
          description: 'Not Found',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Produto não encontrado'
                  },
                },
              },
            },
          },
        },
    },
  },
};

module.exports = {  byId };
