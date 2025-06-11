'use strict';
const {
  Model,
  QueryTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async searchClients(searchTerm) {

      const query = `
          SELECT
              id,
              email, 
              names,
              firstLastName,
              secondLastName,
              isWholeSale
          FROM clients
          WHERE names LIKE :search_param 
             OR firstLastName LIKE :search_param
             OR secondLastName LIKE :search_param
      `;

      const clients = await sequelize.query(query, {
        replacements: { search_param: `${searchTerm}%` },
        logging: false,
        raw: true,
        type: QueryTypes.SELECT,
      });

      return clients;

    }
  }
  Client.init({
    names: DataTypes.STRING,
    firstLastName: DataTypes.STRING,
    secondLastName: DataTypes.STRING,
    email: DataTypes.STRING,
    mobileNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    isWholeSale: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};