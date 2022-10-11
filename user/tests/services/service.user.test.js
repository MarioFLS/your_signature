const chai = require('chai');
const shell = require('shelljs');
const StatusCodes = require('http-status-codes');
const { userLogin, createUser } = require('../../src/services/service.user');
require('dotenv/config');

const { expect } = chai;

const newUser = {
  name: 'mario fernando',
  email: 'emailteste@gmail.com',
  password: '123456',
  cpf: '12222222288',
  phone: '2324234',
};

beforeAll(() => shell.exec('npm run restore'));

afterAll(() => shell.exec('npm run restore'));

describe('Teste de Service - Teste de Login do Usuário >>> ', () => {
  it('Caso haja sucesso no Login', async () => {
    const { dataValues } = await userLogin('pedroJorge@gmail.com', '123456');
    expect(dataValues).to.deep.contains.keys('id', 'email', 'cpf');
  });
  it('Caso haja falha no Login', async () => {
    const response = await userLogin('usuario fake', 'senha fake');
    expect(response).to.deep.equal({
      error: {
        code: StatusCodes.UNAUTHORIZED,
        message: 'Seu email ou senha estão incorretos.',
      },
    });
  });
});

describe('Teste de Service - Criar um novo usuário >>> ', () => {
  it('Caso haja sucesso na Criação do novo usuário', async () => {
    const { dataValues } = await createUser(newUser);
    expect(dataValues).to.deep.contains.keys(
      'id',
      'name',
      'email',
      'password',
      'cpf',
      'phone'
    );
  });
  it('Caso haja falha na Criação do novo usuário', async () => {
    const response = await createUser(newUser);
    expect(response).to.deep.equal({
      error: {
        code: StatusCodes.UNAUTHORIZED,
        message: 'Esse email de usuário já possui conta! Tente outro!',
      },
    });
  });
});
