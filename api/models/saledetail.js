'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SaleDetail.init({
    idSale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idProduct: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SaleDetail',
  });
  return SaleDetail;
};