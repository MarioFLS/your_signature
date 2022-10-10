const Product = (sequelize, DataTypes) => sequelize.define('Product', {
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL(6, 2),
  urlImage: DataTypes.STRING,
}, {
  timestamps: false,
});

module.exports = Product;
