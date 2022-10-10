const StatusCodes = require('http-status-codes');
const { Product } = require('../models');

const getAllProducts = async () => {
  const result = await Product.findAll();
  return result;
};

module.exports = { getAllProducts };
