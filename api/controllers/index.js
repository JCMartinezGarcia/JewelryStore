//required modules
const {
    listUsers,
    registerUser,
    editUser,
    deleteUser
} = require('./userController');

const {
    getUserProfile,
    registerUserProfile,
    editUserProfile,
    deleteUserProfile
} = require('./userProfileController');

//exports
module.exports = {
    listUsers,
    registerUser,
    editUser,
    deleteUser,
    getUserProfile,
    registerUserProfile,
    editUserProfile,
    deleteUserProfile,
}