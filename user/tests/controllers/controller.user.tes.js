/* const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiHttp = require("chai-http")
const shell = require('shelljs');
const StatusCodes = require('http-status-codes');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);

const newUser = {
  name: 'mario fernando',
  email: 'emailteste@gmail.com',
  password: '123456',
  cpf: '12222222288',
  phone: '2324234',
};

beforeAll(() => shell.exec('npm run restore'));

afterAll(() => shell.exec('npm run restore'));

describe('Teste de Controllers - Testando se é possível logar', () => {
  it('Testando sucesso no login', async () => {
    const response = await chai
      .request('http://localhost:3100')
      .post('/login')
      .send({ email: 'anderson@email.com', password: 'senha' });
    expect(response).to.have.status(StatusCodes.OK);
  });
});
 */