//import models
const { where } = require('sequelize');
const { User, ProfileUser } = require('../models/index');
//controller Function

/**
 * gets all users
 * @returns 
 */
const listUsers = async () => {
    try {
        // query users 
        const usrs = await User.findAll();
        // return list of users
        return usrs;
    } catch (error) {
        //handle errors
        console.log('Error reading table users:', error.message);
        throw error;
    }
}

/**
 * register a new user in DB
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */
const registerUser = async (email, password) => {
    try {
        // register a new user
        const usr = await User.create({ email: email, password: password });
        // return created user
        return usr;
    } catch (error) {
        //handle errors
        console.log('Error registering user:', error.message);
        throw error;
    }
}

/**
 * edits an user 
 * @param {*} email 
 * @param {*} password 
 * @param {*} id 
 * @returns 
 */
const editUser = async (email, password, id) => {
    try {
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
    } catch (error) {
        //handle errors
        console.log('Error altering table user:', error.message);
        throw error;
    }
}

//exports
module.exports = {
    listUsers,
    registerUser,
    editUser
}