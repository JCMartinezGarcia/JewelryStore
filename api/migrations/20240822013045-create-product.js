'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sku: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      metal: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      carat: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.TEXT
      },
      line: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      category: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      unitPrice: {
        type: Sequelize.FLOAT
      },
      gramPrice: {
        type: Sequelize.FLOAT
      },
      gram: {
        type: Sequelize.FLOAT
      },
      stock: {
        defaultValue: 0,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Products');
  }
};