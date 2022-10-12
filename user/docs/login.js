const login = {
  post: {
    tags: ['user'],
    summary:
      'Permite fazer Login como usuário e retornar um token com suas informações',
    description:
      'Após inserir os dados corretamente: email e senha, é gerado um token com algumas informações',
    produces: ['application/json'],
    parameters: [
      {
        name: 'body',
        in: 'body',
        description: 'email do usuário',
        required: true,
        type: 'object',
        properties: {
          email: {
            type: 'string',
            example: 'email@email.com',
          },
          password: {
            type: 'string',
            example: 'uma senha válida',
          },
        },
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              email: {
                type: 'string',
                example: 'pedroJorge@gmail.com',
              },
              password: {
                type: 'string',
                example: '123456',
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                  example:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpUZXh0byIsImlhdCI6MTUxN',
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = { login };
