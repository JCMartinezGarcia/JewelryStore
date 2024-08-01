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

const {
    listClients,
    getClientById,
    registerClient,
    editClient,
    deleteClient,
    searchClients
} = require('./clientsController');

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
    listClients,
    getClientById,
    registerClient,
    editClient,
    deleteClient,
    searchClients
}