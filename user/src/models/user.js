const User = (sequelize, DataTypes) => sequelize.define('User', {
  name: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
  cpf: DataTypes.STRING,
  phone: DataTypes.STRING,
}, {
  timestamps: false,
});

module.exports = User;
