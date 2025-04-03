'use strict';
const {
  Model,
  Op,
  QueryTypes
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { UserProfile } = models;
      User.hasMany(UserProfile, {
        foreignKey: 'idUser',
        onDelete: 'CASCADE',
        hooks: true,
      });
    }

    static async isEmailRegistered(email) {
      return this.findOne({ where: { email } })
    }

    /**
  * Fetch all users with their profile names
  */
    static async list() {
      const query = `
          SELECT 
              usr.id, 
              usr.email, 
              pfl.userName AS usuario
          FROM users AS usr
          INNER JOIN userprofiles AS pfl ON usr.id = pfl.idUser
      `;

      return await sequelize.query(query, {
        logging: false, // Remove logging in production for security reasons
        raw: true,
        type: QueryTypes.SELECT,
      });
    }

    static async findUserByPK(id) {
      const user = await this.findOne({
        attributes: { exclude: ['password'] },
        include: ['UserProfiles'],
        where: { id },
      });
      if (!user) {
        throw new Error(`Usuario con el id:${id} no se encontró registrado.`);
      }
      return user;
    }

    static async edit(id, email) {
      const user = await this.update(
        { email },
        {
          where: {
            id
          }
        }
      );
      if (!user[0]) {
        throw new Error('User does not exists in database');
      }
      return user;
    }

    static async search(string) {

      const query = 'SELECT ' +
        'usr.id, ' +
        'usr.email, ' +
        'pfl.userName as usuario ' +
        'FROM users as usr ' +
        'INNER JOIN userprofiles as pfl ON usr.id = pfl.idUser ' +
        'WHERE usr.email LIKE :search_param OR pfl.userName LIKE :search_param';
      const users = await sequelize.query(query, {
        replacements: { search_param: string + '%' },
        // A function (or false) for logging your queries
        // Will get called for every SQL query that gets sent
        // to the server.
        logging: console.log,

        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: true,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: QueryTypes.SELECT,
      });
      return users;
    }

  }
  User.init({
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};