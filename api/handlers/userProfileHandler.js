//required modules
const {
    registerUserProfile,
    editUserProfile,
    deleteUserProfile,
    getUserProfile
} = require('../controllers');

//handler functions 

/**
 * handles logic to get an user profile by id
 * @param {*} req 
 * @param {*} res 
 */
const getUserProfileHandler = async (req, res) => {
    try {
        const { id } = req.params;
        //call register profile function 
        const profile = await getUserProfile(id);
        //return response status and profile
        res.status(201).json(profile);
    } catch (error) {
        //handle errors
        console.log('Error getting user profile', error.message);
        res.status(500).json({ message: 'Error getting user profile', error: error.message });
    }
}

/**
 * handle logic to register an user profile
 * @param {*} req 
 * @param {*} res 
 */
const registerUserProfileHandler = async (req, res) => {

    try {
        //check if file exist in request file object
        const fileExist = req.hasOwnProperty('file');
        //text form fields
        const profileData = req.body;
        //validate file exist
        if (fileExist) {
            //destructure storage profile image path
            const { path } = req.file;
            //add image storage path to profile data object
            profileData.image = path;
        }
        //call register profile function 
        const profile = await registerUserProfile(profileData);
        //return response status and profile
        res.status(201).json(profile);
    } catch (error) {
        //handle errors
        console.log('Error registering user profile', error.message);
        res.status(500).json({ message: 'Error registering user profile', error: error.message });
    }
}

/**
 * handle logic to edit an user profile
 * @param {*} req 
 * @param {*} res 
 */
const editUserProfileHandler = async (req, res) => {
    try {
        const { id } = req.params;
        //check if file exist in request file object
        const fileExist = req.hasOwnProperty('file');
        //text form fields
        const profileData = req.body;
        //validate file exist
        if (fileExist) {
            //destructure storage profile image path
            const { path } = req.file;
            //add image storage path to profile data object
            profileData.image = path;
        }
        //call edit profile function 
        const profile = await editUserProfile(profileData, id);
        //return response status and edited profile
        res.status(201).json(profile);
    } catch (error) {
        //handle errors
        console.log('Error editing user profile', error.message);
        res.status(500).json({ message: 'Error editing user profile', error: error.message });
    }
}

/**
 * handles login to delete an user profile
 * @param {*} req 
 * @param {*} res 
 */
const deleteUserProfileHandler = async (req, res) => {
    try {
        const { id } = req.params;
        //call delete profile function 
        const profile = await deleteUserProfile(id);
        //return response
        res.status(201).json(profile);
    } catch (error) {
        //handle errors
        console.log('Error deleting user profile', error.message);
        res.status(500).json({ message: 'Error deleting user profile', error: error.message });
    }
}

//exports
module.exports = {
    getUserProfileHandler,
    registerUserProfileHandler,
    editUserProfileHandler,
    deleteUserProfileHandler
}