//import models
const { where } = require('sequelize');
const { User, ProfileUser } = require('../models/index');
//controller Function

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
 * register a new user in DB
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */
const registerUser = async (email, password) => {
    // register a new user
    const usr = await User.create({ email: email, password: password });
    // return created user
    return usr;
}

/**
 * edits an user 
 * @param {*} email 
 * @param {*} password 
 * @param {*} id 
 * @returns 
 */
const editUser = async (email, password, id) => {
    // edits an user
    const usr = await User.update(
        { email, password },
        {
            where: {
                id
            }
        }
    );
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
    //returns deleted user
    return user;
}

//exports
module.exports = {
    listUsers,
    registerUser,
    editUser,
    deleteUser
}