//required modules
const {
    listUsers,
    registerUser,
    editUser,
    deleteUser
} = require('./userController');

const {
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
    registerUserProfile,
    editUserProfile,
    deleteUserProfile
}