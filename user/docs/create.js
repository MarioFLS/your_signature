const create = {
  post: {
    tags: ['Criar Novo Usuário'],
    summary:
      'Permite a criação de um novo usuário',
    description:
      'Após inserir os dados corretamente: email, senha, password, cpf, e opcionalmente telefone é gerado um token com algumas informações e o usuário é cadastrado com sucesso',
    produces: ['application/json'],
    parameters: [
      {
        name: 'body',
        in: 'body',
        required: true,
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'nome muito legal de usuário',
          },
          email: {
            type: 'string',
            example: 'email@email.com',
          },
          password: {
            type: 'string',
            example: 'uma senha válida',
          },
          cpf: {
            type: 'string',
            example: 'o seu CPF',
          },
          phone: {
            type: 'string',
            example: 'opicional',
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
              name: {
                type: 'string',
                example: 'Usuario Novo',
              },
              email: {
                type: 'string',
                example: 'novoUsuario@email.com',
              },
              password: {
                type: 'string',
                example: 'senhaBastanteForte',
              },
              cpf: {
                type: 'string',
                example: '12222222288',
              },
              phone: {
                type: 'string',
                example: '2324234',
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
      401: {
        description: 'UNAUTHORIZED',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Esse email de usuário já possui conta! Tente outro!'
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = { create };
