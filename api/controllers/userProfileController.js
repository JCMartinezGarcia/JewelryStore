//required modules
const { User, UserProfile } = require('../models/index');

//functions

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
    registerUserProfile,
    editUserProfile,
    deleteUserProfile
}