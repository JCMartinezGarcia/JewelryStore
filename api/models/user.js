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

    /**
    * Registers a user and creates their profile
    */
    static async register(email, password) {
      const transaction = await sequelize.transaction();

      try {
        // Create the user
        const user = await this.create({ email, password }, { transaction });

        // Create the associated profile
        await user.createUserProfile({ idUser: user.id }, { transaction });

        await transaction.commit();

        return {
          id: user.id,
          email: user.email,
        };
      } catch (error) {
        await transaction.rollback();
        throw new Error(`Error registering user: ${error.message}`);
      }
    }

    /**
     * Checks if the email was registered already
     */
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
    static async getUserByPK(id) {
      const user = await this.findOne({
        attributes: { exclude: ['password'] },
        include: ['UserProfiles'],
        where: { id },
      });

      if (!user) {
        throw new Error(`User with ID ${id} not found`);
      }

      // Optional: return plain JSON without Sequelize metadata
      return user.get({ plain: true });
    }

    static async updateById(id, email) {
      const [updatedCount] = await this.update(
        { email },
        {
          where: {
            id
          }
        }
      );
      if (updatedCount === 0) {
        throw new Error('User not found');
      }
      return { message: 'User updated successfully', userId: id };
    }


    static async deleteById(id) {
      const transaction = await sequelize.transaction();

      try {
        const user = await this.findOne({
          where: { id },
          include: ['UserProfiles'],
          transaction,
        });

        if (!user) {
          throw new Error('User not found');
        }

        const userData = {
          id: user.id,
          email: user.email,
          userName: user.UserProfiles?.userName || null,
        };

        await user.destroy({ transaction });
        await transaction.commit();

        return userData;
      } catch (error) {
        await transaction.rollback();
        throw error;
      }
    }
    static async search(searchTerm) {
      const query = `
          SELECT 
              usr.id, 
              usr.email, 
              pfl.userName AS usuario 
          FROM users AS usr
          INNER JOIN userprofiles AS pfl ON usr.id = pfl.idUser 
          WHERE usr.email LIKE :search_param 
             OR pfl.userName LIKE :search_param
      `;

      const users = await sequelize.query(query, {
        replacements: { search_param: `${searchTerm}%` },
        logging: false,
        raw: true,
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