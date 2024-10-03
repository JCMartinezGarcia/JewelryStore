'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Debt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Debt.init({
    idClient: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idSale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    amountPayed: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    amountPending: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'Debt',
  });
  return Debt;
};