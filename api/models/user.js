'use strict';
const {
  Model,
  Op
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
      return await this.findAll({
        attributes: { exclude: ['password'] },
        include: ['UserProfiles'],
        where: {
          '$UserProfiles.userName$': {
            [Op.startsWith]: string,

          }
        }
      });

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