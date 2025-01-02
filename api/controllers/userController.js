const { User } = require('../models/index');

/**
 * gets all users
 * @returns 
 */
const listUsers = async () => {
    // query users 
    const usrs = await User.findAll();
    // return list of users
    return usrs;
}

/**
 * Register a new user in DB
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */
const registerUser = async (email, password) => {
    const usr = await User.create({ email: email, password: password });
    //create user profile
    usr.createUserProfile({ idUser: usr.id });
    return usr;
}

/**
 * Edits an user 
 * @param {*} email 
 * @param {*} password 
 * @param {*} id 
 * @returns 
 */
const editUser = async (email, id) => {
    return User.edit(id, email);
}

/**
 * Deletes an user
 * @param {*} id 
 * @returns 
 */
const deleteUser = async (id) => {
    const user = await User.destroy({
        where: {
            id
        }
    });
    if (!user) {
        throw new Error('User does not exists in database');
    }
    return user;
}

const verifyEmail = (email) => {
    return User.isEmailRegistered(email);
}

const findUser = (id) => {
    return User.findUserByPK(id);
}

//exports
module.exports = {
    listUsers,
    registerUser,
    editUser,
    deleteUser,
    verifyEmail,
    findUser
}