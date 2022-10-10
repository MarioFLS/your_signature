const StatusCodes = require('http-status-codes');
const { getAllProducts } = require('../service/service.product');

const getAll = async (_req, res) => {
  const response = await getAllProducts();
  return res.status(StatusCodes.OK).json(response);
};

module.exports = { getAll };
