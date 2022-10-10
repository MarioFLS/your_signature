const StatusCodes = require('http-status-codes');
const { getAllProducts, getByIdProducts } = require('../service/service.product');

const getAll = async (_req, res) => {
  const response = await getAllProducts();
  return res.status(StatusCodes.OK).json(response);
};

const getById = async (req, res, next) => {
  const response = await getByIdProducts(req.params.id);
  if (!response) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Produto não encontrado' });
  }
  return res.status(StatusCodes.OK).json(response);
};

module.exports = { getAll, getById };
