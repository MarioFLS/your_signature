module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2),
      },
      urlImage: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'url_image',
      },
    }, {
      timestamps: false,
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Products');
  },
};
