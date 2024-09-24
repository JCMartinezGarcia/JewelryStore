'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await Promise.all([
      queryInterface.changeColumn(
        'SaleDetails',
        'idSale',
        {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
      ),
      queryInterface.changeColumn(
        'SaleDetails',
        'idProduct',
        {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'SaleDetails',
        'amount',
        {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await Promise.all([
      queryInterface.changeColumn(
        'SaleDetails',
        'idSale',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
      ),
      queryInterface.changeColumn(
        'SaleDetails',
        'idProduct',
        {
          type: Sequelize.DataTypes.INTEGER,
        }
      ),
      queryInterface.changeColumn(
        'SaleDetails',
        'amount',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
      ),
    ]);
  }
};
