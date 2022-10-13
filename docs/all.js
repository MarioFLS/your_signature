const all = {
  get: {
    tags: ['Todos os Produtos'],
    summary:
      'Permite o usuário ver todos os produtos',
    description:
      'Retorna um array com todos os produtos disponíveis',
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
                    example:"http://localhost:3200/images/iPhone-13-Pro-Max.png"
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
              }
            },
          },
        },
      },
    },
  },
};

module.exports = { all };
