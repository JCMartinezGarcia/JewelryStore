'use strict';
const {
  Model,
  QueryTypes
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

    /**
     * Retrieves a list of sales amounts by year from DB
     * @param {*} year 
     * @returns 
     */
    static getSalesByYear(year) {
      const query = 'SELECT ' +
        'EXTRACT(MONTH FROM createdAt) AS month, ' +
        'SUM(total) as total ' +
        'FROM sales ' +
        'WHERE EXTRACT(YEAR FROM createdAt) = ' + year +
        ' and isCancel = 0 ' +
        'GROUP BY month ' +
        'ORDER BY month ';

      return sequelize.query(
        query,
        {
          // A function (or false) for logging your queries
          // Will get called for every SQL query that gets sent
          // to the server.
          logging: console.log,

          // If plain is true, then sequelize will only return the first
          // record of the result set. In case of false it will return all records.
          plain: false,

          // Set this to true if you don't have a model definition for your query.
          raw: false,

          // The type of query you are executing. The query type affects how results are formatted before they are passed back.
          type: QueryTypes.SELECT,
        });
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