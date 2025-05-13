'use strict';
const {
  Model,
  QueryTypes
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Metal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async fetchAll() {
      try {
        const metals = await sequelize.query(
          `
            SELECT *
            FROM metals
            ORDER BY id DESC
            `,
          {
            type: QueryTypes.SELECT,
            // logging: console.log, // Optional: Logs query for debugging
          }
        );
        return metals;
      } catch (error) {
        console.error('Error in fetchAll:', error.message);
        throw new Error('Database query failed while fetching metals');
      }
    }

  }
  Metal.init({
    metal: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Metal',
  });
  return Metal;
};