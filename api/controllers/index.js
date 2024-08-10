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

const {
    listMetals,
    registerMetal,
    editMetal,
    getMetalByPk,
    deleteMetal,
    searchMetals
} = require('./metalsController');

const {
    listCarats,
    registerCarat,
    editCarat
} = require('./caratsController');

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
    searchClients,
    listMetals,
    registerMetal,
    editMetal,
    getMetalByPk,
    deleteMetal,
    searchMetals,
    registerCarat,
    listCarats,
    editCarat
}