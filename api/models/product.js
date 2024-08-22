'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    sku: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    model: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    metal: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    carat: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    },
    line: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    category: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    unitPrice: {
      type: DataTypes.FLOAT
    },
    gramPrice: {
      type: DataTypes.FLOAT
    },
    gram: {
      type: DataTypes.FLOAT
    },
    stock: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};