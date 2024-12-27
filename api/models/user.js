'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { UserProfile } = models;
      User.hasMany(UserProfile, {
        foreignKey: 'idUser'
      });
    }

    static async isEmailRegistered(email) {
      return this.findOne({ where: { email } })
    }

    static findUserByPK(id) {
      return this.findByPk(id);
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
      console.log(user);
      return user;
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