const Product = (sequelize, DataTypes) => sequelize.define('Product', {
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL(6, 2),
  urlImage: {
    type: DataTypes.STRING,
    field: 'url_image',
  },
}, {
  timestamps: false,
});

module.exports = Product;
