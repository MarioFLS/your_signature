const Product = (sequelize, DataTypes) => sequelize.define('Product', {
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL(6, 2),
  urlImage: {
    type: DataTypes.STRING,
    field: 'url_image',
  },
  memoryType1: DataTypes.INTEGER,
  memoryType2: DataTypes.INTEGER,
  memoryType3: DataTypes.INTEGER,
}, {
  timestamps: false,
});

module.exports = Product;
