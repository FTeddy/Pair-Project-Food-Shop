'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Invoices', [
      {
        CostumerId: 1,
        buyDate: new Date('January 6, 2018 11:09:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 2,
        buyDate: new Date('January 7, 2018 07:20:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 6,
        buyDate: new Date('January 7, 2018 12:21:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 9,
        buyDate: new Date('January 8, 2018 13:47:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 3,
        buyDate: new Date('January 9, 2018 15:36:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 4,
        buyDate: new Date('January 6, 2018 16:47:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 8,
        buyDate: new Date('January 16, 2018 17:44:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 9,
        buyDate: new Date('January 17, 2018 18:59:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 10,
        buyDate: new Date('January 19, 2018 19:41:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 4,
        buyDate: new Date('January 22, 2018 20:32:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 2,
        buyDate: new Date('January 24, 2018 09:17:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 1,
        buyDate: new Date('Febuary 2 , 2018 09:30:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 5,
        buyDate: new Date('Febuary 3, 2018 14:28:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 7,
        buyDate: new Date('Febuary 4, 2018 11:22:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 3,
        buyDate: new Date('Febuary 4, 2018 13:34:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 7,
        buyDate: new Date('Febuary 5, 2018 12:45:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 1,
        buyDate: new Date('Febuary 6, 2018 16:09:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 2,
        buyDate: new Date('Febuary 7, 2018 17:12:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 6,
        buyDate: new Date('Febuary 8, 2018 19:10:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 5,
        buyDate: new Date('Febuary 9, 2018 17:22:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 9,
        buyDate: new Date('Febuary 10, 2018 14:20:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CostumerId: 10,
        buyDate: new Date('Febuary 11, 2018 14:50:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
