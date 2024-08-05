//required modules
const {
    listUserHandler,
    registerUserHandler,
    editUserHandler,
    deleteUserHandler
} = require('./userHandler');

const {
    getUserProfileHandler,
    registerUserProfileHandler,
    editUserProfileHandler,
    deleteUserProfileHandler
} = require('./userProfileHandler');

const {
    listClientsHandler,
    getClientHandler,
    registerClientHandler,
    editClientHandler,
    deleteClientHandler,
    searchClientsHandler
} = require('./clientsHandler');

const {
    listMetalsHandler,
    registerMetalHandler,
    editMetalHandler,
    getMetalHandler,
    deleteMetalHandler
} = require('./metalsHandler');

//exports
module.exports = {
    listUserHandler,
    registerUserHandler,
    editUserHandler,
    deleteUserHandler,
    getUserProfileHandler,
    registerUserProfileHandler,
    editUserProfileHandler,
    deleteUserProfileHandler,
    listClientsHandler,
    getClientHandler,
    registerClientHandler,
    editClientHandler,
    deleteClientHandler,
    searchClientsHandler,
    listMetalsHandler,
    registerMetalHandler,
    editMetalHandler,
    getMetalHandler,
    deleteMetalHandler
}

