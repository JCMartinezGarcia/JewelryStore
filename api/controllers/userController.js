const { User, sequelize } = require('../models/index');

/**
 * Fetches all users from the database
 */
const listUsers = async () => User.list();

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
 * Updates user by ID
 */
const updateUser = (email, id) => {
    return User.updateById(id, email);
}

/**
 * Deletes an user and their profile by ID
 */
const deleteUser = async (id) => {
    return await User.deleteById(id);
};

const verifyEmail = (email) => {
    return User.isEmailRegistered(email);
}


/**
 * Fetches user by ID
 */
const getUserById = async (id) => {
    return await User.getUserByPK(id);
};


/**
 * Searches users by email or username
 */
const searchUsers = async (searchString) => {
    return await User.search(searchString);
};

//exports
module.exports = {
    listUsers,
    registerUser,
    updateUser,
    deleteUser,
    verifyEmail,
    getUserById,
    searchUsers
}