const { Product } = require('../models');

const getAllProducts = async () => {
  const result = await Product.findAll();
  return result;
};

const getByIdProducts = async (id) => {
  const result = await Product.findOne({ where: { id } });
  return result;
};

module.exports = { getAllProducts, getByIdProducts };
