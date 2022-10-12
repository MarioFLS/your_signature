const chai = require('chai');
const Sinon = require("sinon");
const sinonChai = require('sinon-chai');
const Controller = require('../../src/controllers/controllers.user');
const jwt = require("jsonwebtoken");
const { User } = require("../../src/models");
const { Error } = require('../../src/middleware/middleware.error');

const { expect } = chai;
chai.use(sinonChai);

const user = {
  name: 'mario fernando',
  email: 'emailteste@gmail.com',
  cpf: '12222222288',
};

const newUser = {
  id: 5,
  name: 'mario fernando',
  email: 'emailteste@gmail.com',
  password: '123456',
  cpf: '12222222288',
  phone: '2324234',
};

const errorLogin = {
  error: {
    code: 401,
    message: 'Seu email ou senha estão incorretos.',
  },
};

const erroCreate =  {
  error: {
    code: 401,
    message: 'Esse email de usuário já possui conta! Tente outro!',
  },
};

describe('Teste de Controllers - Testando login do usuário', () => {
  const req =  {};
  const res = {};
  const next = Sinon.stub().returns({});
  
  beforeEach(() => {
    req.body = {};
    res.status = Sinon.stub().returns(res);
    res.json = Sinon.stub().resolves();
  });

  afterEach(() => Sinon.restore());

  it('Testando sucesso no login', async () => {
    Sinon.stub(User, "findOne").resolves(user);
    Sinon.stub(jwt, "sign").returns("tokenConfiavel");
    await Controller.login(req, res, next);
    expect(res.status).to.been.calledWith(200);
    expect(res.json).to.been.calledWith({ token: 'tokenConfiavel' });
  });

  it('Testando falha no login', async () => {
    const err = Sinon.stub().returns({});
    Sinon.stub(User, "findOne").returns(null);
    
    await Controller.login(req, res, next);
    expect(next).to.been.calledWith(errorLogin);
    
    // Testa se o valor que entra no erro retorna corretamente
    await Error(errorLogin, req, res, next);
    expect(res.status).to.been.calledWith(401);
  })
});


describe('Teste de Controllers - Criar novo usuário', () => {
  const req =  {};
  const res = {};
  const next = Sinon.stub().returns({});
  
  beforeEach(() => {
    req.body = {};
    res.status = Sinon.stub().returns(res);
    res.json = Sinon.stub().resolves();
  });

  afterEach(() => Sinon.restore());

  it('Testando sucesso na criação de usuário', async () => {
    Sinon.stub(User, "findOne").resolves(null);
    Sinon.stub(User, "create").resolves(newUser);
    Sinon.stub(jwt, "sign").returns("tokenConfiavel");

    await Controller.create(req, res, next);
    expect(res.status).to.been.calledWith(201);
    expect(res.json).to.been.calledWith({ token: 'tokenConfiavel' });
  });

  it('Testando falha no login', async () => {
    Sinon.stub(User, "findOne").resolves(user);
    
    await Controller.create(req, res, next);
    expect(next).to.been.calledWith(erroCreate);  
  }); 
});
