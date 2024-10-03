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
        'Debts',
        'amount',
        {
          type: Sequelize.DataTypes.DECIMAL(8, 2),
          allowNull: false
        },
      ),
      queryInterface.changeColumn(
        'Debts',
        'amountPayed',
        {
          type: Sequelize.DataTypes.DECIMAL(8, 2),
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'Debts',
        'amountPending',
        {
          type: Sequelize.DataTypes.DECIMAL(8, 2),
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
        'Debts',
        'amount',
        {
          type: Sequelize.DataTypes.DECIMAL(6, 2),
          allowNull: false
        },
      ),
      queryInterface.changeColumn(
        'Debts',
        'amountPayed',
        {
          type: Sequelize.DataTypes.DECIMAL(6, 2),
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'Debts',
        'amountPending',
        {
          type: Sequelize.DataTypes.DECIMAL(6, 2),
          allowNull: false
        },
      ),
    ]);
  }
};
