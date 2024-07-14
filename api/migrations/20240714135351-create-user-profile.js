'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        type: Sequelize.INTEGER,
      },
      userName: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING(50)
      },
      firstLastname: {
        type: Sequelize.STRING(50)
      },
      secondLastName: {
        type: Sequelize.STRING(50)
      },
      address: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('UserProfiles');
  }
};