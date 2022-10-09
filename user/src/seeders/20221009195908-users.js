module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [{
        id: 1,
        name: 'Pedro Jorge',
        email: 'pedroJorge@gmail.com',
        password: '123456',
        cpf: '123456789',
      },
      {
        id: 2,
        name: 'Jorge Pedro',
        email: 'jorgePedro@gmail.com',
        password: '6543216',
        cpf: '987654321',
        phone: '2198888888',
      },
      {
        id: 3,
        name: 'Anderson Santos',
        email: 'anderson@email.com',
        password: 'senha',
        cpf: '987651234',
      },
      {
        name: 'Bojji',
        email: 'bojji@gmail.com',
        password: 'senhaMuitoForte',
        cpf: '123498765',
        phone: '21999999999',
      },
      ],

      { timestamps: false },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
