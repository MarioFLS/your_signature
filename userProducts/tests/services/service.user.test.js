const chai = require('chai');
const mongoose = require('mongoose');
const { closeDatabase } = require('../../src/models/connection');
const {
  createNewSignature,
  getSignatureByUserID,
} = require('../../src/services/service.signature');
const { Signatures } = require('../../src/models/signatures');
require('dotenv/config');

const { expect } = chai;

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

beforeAll(() => {
  Signatures();
});

afterAll(() => mongoose.disconnect());

describe('Teste de Service - Criar uma nova assinatura >>> ', () => {
  it('Caso haja sucesso na Criação do novo usuário', async () => {
    const response = await createNewSignature(newSignature);
    const signatures = response.map((signature) => signature);
    signatures.forEach(({ _doc }) => {
      expect(_doc).to.deep.contains.keys(
        'userId',
        'quantity',
        'productId',
        'productName',
        'productImage',
        'signedIn',
        '_id'
      );
    });
    closeDatabase();
  });
  it('Buscar Assinatura por ID', async () => {
    const response = await getSignatureByUserID(1);
    response.forEach(({ _doc }) => {
      expect(_doc).to.deep.contains.keys(
        'userId',
        'quantity',
        'productId',
        'productName',
        'productImage',
        'signedIn',
        '_id'
      );
    });
    closeDatabase();
  });
});
