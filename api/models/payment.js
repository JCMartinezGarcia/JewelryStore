'use strict';
const {
  Model,
  QueryTypes
} = require('sequelize');
const { isColString } = require('sequelize/lib/utils');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async searchPayments(client) {
      const payments = await sequelize.query(`
        SELECT
        py.id,
        py.idDebt,
        py.amount,
        py.createdAt,
        py.updatedAt 
        FROM payments as py
        JOIN debts as deb ON py.idDebt = deb.id
        WHERE deb.idClient = :client
        `, {
        replacements: { client },
        type: QueryTypes.SELECT
      });

      return payments;
    }
  }
  Payment.init({
    idDebt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false
    },
    isCanceled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};