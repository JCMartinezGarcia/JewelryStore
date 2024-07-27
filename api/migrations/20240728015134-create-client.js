'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      names: {
        type: Sequelize.STRING(30)
      },
      firstLastName: {
        type: Sequelize.STRING(20)
      },
      secondLastName: {
        type: Sequelize.STRING(20)
      },
      email: {
        type: Sequelize.STRING(50)
      },
      mobileNumber: {
        type: Sequelize.STRING(12)
      },
      address: {
        type: Sequelize.STRING
      },
      isWholeSale: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clients');
  }
};