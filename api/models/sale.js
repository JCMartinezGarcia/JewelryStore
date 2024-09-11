'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sale.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idUser: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    idClient: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    subTotal: {
      allowNull: false,
      type: DataTypes.DECIMAL(6, 2)
    },
    iva: {
      allowNull: false,
      type: DataTypes.DECIMAL(6, 2)
    },
    total: {
      allowNull: false,
      type: DataTypes.DECIMAL(6, 2)
    },
    isCredit: {
      type: DataTypes.BOOLEAN
    },
    folio: {
      type: DataTypes.STRING,
      unique: true
    },
    isCancel: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};