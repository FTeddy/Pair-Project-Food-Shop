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
    return queryInterface.bulkInsert('Costumers', [
      {
        userName: 'Willburn',
        password: '12345678',
        isLogin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Errol',
        password: 'k1d093ue1934i1',
        isLogin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Deloris',
        password: '12edjc89ceu1',
        isLogin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Robot',
        password: '53vy45y12',
        isLogin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Shanita',
        password: 'cg3094tu39fv',
        isLogin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Kimiko',
        password: 'fc23r82u23m0c',
        isLogin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Denna',
        password: '123431455',
        isLogin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Harvey',
        password: '777888',
        isLogin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Guillermo',
        password: '777888',
        isLogin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Lucien',
        password: '777888',
        isLogin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Florence',
        password: '777888',
        isLogin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Costumers', null, {})
  }
};
