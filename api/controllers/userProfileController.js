//required modules
const { UserProfile } = require('../models/index');

//functions

/**
 * gets an user profile by id
 * @param {*} id 
 * @returns 
 */
const getUserProfile = async (id) => {
    //gets user profile by id 
    const profile = UserProfile.findAll({
        where: {
            id,
        },
    });
    //returns user profile 
    return profile;
}

/**
 * registers a new user profile
 * @param {*} profileParams 
 * @returns 
 */
const registerUserProfile = async (profileParams) => {
    // register a new user profile
    const profile = await UserProfile.create(profileParams);
    // return created profile
    return profile;
}

/**
 * edits an user profile
 * @param {*} profileParams 
 * @param {*} id 
 * @returns 
 */
const editUserProfile = async (profileParams, id) => {
    //edits an user profile
    const profile = await UserProfile.update(
        profileParams,
        {
            where: {
                idUser: id,
            },
        },
    );
    //returns 1 if it succeeded 0 if it failed
    return profile;
}

/**
 * deletes an user profile
 * @param {*} id 
 * @returns 
 */
const deleteUserProfile = async (id) => {
    //deletes user profile
    const profile = await UserProfile.destroy({
        where: {
            id,
        },
    });
    //returns 1 if it succeeded 0 if it failed
    return profile;
}

//exports
module.exports = {
    getUserProfile,
    registerUserProfile,
    editUserProfile,
    deleteUserProfile
}