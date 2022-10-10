module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          id: 1,
          name: 'iPhone 13',
          price: 4397.07,
          url_image: 'http://localhost:3200/images/iPhone-13-Pro-Max.png',
        },
        {
          id: 2,
          name: 'iPhone 13 Midnight',
          price: 4300.22,
          url_image: 'http://localhost:3200/images/iPhone-13-midnight.png',
        },
        {
          id: 3,
          name: 'iPhone 13 Pink',
          price: 4320.98,
          url_image: 'http://localhost:3200/images/iPhone-13-pink.png',
        },
        {
          id: 4,
          name: 'iPhone 13 Pro',
          price: 3200.75,
          url_image: 'http://localhost:3200/images/iPhone-13-Pro.png',
        },
        {
          id: 5,
          name: 'iPhone 13 Pro Max',
          price: 4500.98,
          url_image: 'http://localhost:3200/images/iPhone-13-Pro-Max.png',
        },
      ],
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
