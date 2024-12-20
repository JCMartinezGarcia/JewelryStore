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
 * edits an user 
 * @param {*} email 
 * @param {*} password 
 * @param {*} id 
 * @returns 
 */
const editUser = async (email, id) => {
    // edits an user
    const usr = await User.update(
        { email },
        {
            where: {
                id
            }
        }
    );
    //validate user was found to be edited
    if (!usr[0]) {
        throw new Error('User does not exists in database');
    }
    // return updated user
    return usr;
}

/**
 * deletes an user
 * @param {*} id 
 * @returns 
 */
const deleteUser = (id) => {
    //deletes user 
    const user = User.destroy({
        where: {
            id
        }
    });
    //validate user was found to be deleted
    if (!user[0]) {
        throw new Error('User does not exists in database');
    }
    //returns deleted user
    return user;
}

const verifyEmail = (email) => {
    return User.isEmailRegistered(email);
}

//exports
module.exports = {
    listUsers,
    registerUser,
    editUser,
    deleteUser,
    verifyEmail
}