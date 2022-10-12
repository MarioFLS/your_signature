const chai = require('chai');
const Sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Controller = require('../../src/controllers/controllers.product');
const { Product } = require('../../src/models');

const { expect } = chai;
chai.use(sinonChai);

describe('Teste de Controllers - Testando de produto', () => {
  const req = {};
  const res = {};
  const next = Sinon.stub().returns({});

  beforeEach(() => {
    req.body = {};
    req.params = { id: 1 };
    res.status = Sinon.stub().returns(res);
    res.json = Sinon.stub().resolves();
  });

  afterEach(() => Sinon.restore());

  it('Testando todos os products', async () => {
    Sinon.stub(Product, 'findAll').resolves([{}]);
    await Controller.getAll(req, res, next);
    expect(res.status).to.been.calledWith(200);
  });

  it('Testando productos por ID', async () => {
    Sinon.stub(Product, 'findOne').returns({});

    await Controller.getById(req, res, next);
    expect(res.status).to.been.calledWith(200);
  });
  it('Testando falha de productos por ID', async () => {
    Sinon.stub(Product, 'findOne').returns(null);

    await Controller.getById(req, res, next);
    expect(res.status).to.been.calledWith(404);
  });
});
