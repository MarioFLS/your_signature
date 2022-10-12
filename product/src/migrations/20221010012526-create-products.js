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
      memoryType1: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      memoryType2: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      memoryType3: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
    }, {
      timestamps: false,
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Products');
  },
};
