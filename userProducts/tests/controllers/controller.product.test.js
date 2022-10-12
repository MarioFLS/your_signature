const chai = require('chai');
const Sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Controller = require('../../src/controllers/controller.signature');
const { closeDatabase, database } = require('../../src/models/connection');
const { Signatures } = require('../../src/models/signatures');

const { expect } = chai;
chai.use(sinonChai);

const newSignature = [
  {
    userId: 2,
    quantity: 1,
    productId: 1,
    productName: 'iPhone 13 Max',
    productImage: 'url de imagem',
    signedIn: '10/06/2022',
  },
];
describe('Teste de Controllers - Testando Assinaturas', () => {
  const req = {};
  const res = {};
  const token = { token: 'token deveras confiavel' };
  const next = Sinon.stub().returns({});

  beforeEach(() => {
    res.status = Sinon.stub().returns(res);
    res.json = Sinon.stub().resolves();
  });

  afterEach(() => {
    Sinon.restore();
    return closeDatabase();
  });

  it('Testando criar novas assinaturas', async () => {
    req.body = newSignature;
    Sinon.stub(Signatures, 'create').resolves([{}]);
    await Controller.newSignature(token, req, res, next);
    expect(res.status).to.been.calledWith(200);
  });

  it('Testando pegar assinaturas', async () => {
    req.params = {id: 2};
    Sinon.stub(Signatures, 'find').resolves([{}]);
    await Controller.getSignatures(req, res);
    expect(res.status).to.been.calledWith(200);
  });
});
