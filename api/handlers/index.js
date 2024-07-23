//required modules
const {
    listUserHandler,
    registerUserHandler,
    editUserHandler,
    deleteUserHandler
} = require('./userHandler');

const {
    registerUserProfileHandler,
    editUserProfileHandler,
    deleteUserProfileHandler
} = require('./userProfileHandler');

//exports
module.exports = {
    listUserHandler,
    registerUserHandler,
    editUserHandler,
    deleteUserHandler,
    registerUserProfileHandler,
    editUserProfileHandler,
    deleteUserProfileHandler
}

