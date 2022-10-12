const chai = require('chai');
const shell = require('shelljs');
const {
  getAllProducts,
  getByIdProducts,
} = require('../../src/services/service.product');
require('dotenv/config');

const { expect } = chai;

beforeAll(() => shell.exec('npm run restore'));

describe('Teste de Service - Teste de Produtos >>> ', () => {
  it('Retornar todos os produtos', async () => {
    const products = await getAllProducts();
    const response = products.map(({ dataValues }) => dataValues);
    response.forEach((product) =>
      expect(product).to.deep.contains.keys('id', 'name', 'price', 'urlImage')
    );
  });
  it('Retorna produto pelo id', async () => {
    const { dataValues } = await getByIdProducts(1);
    expect(dataValues).to.deep.contains.keys('id', 'name', 'price', 'urlImage');
    expect(dataValues).to.deep.contains({ id: 1 });
  });
});
