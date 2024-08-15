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
    deleteMetalHandler,
    searchMetalHandler
} = require('./metalsHandler');

const {
    listProductLinesHandler,
    registerProductLineHandler,
    editProductLineHandler,
    findProductLineHandler
} = require('./productLinesHandler');

const {
    listCaratsHandler,
    registerCaratHandler,
    editCaratHandler,
    deleteCaratHandler,
    findCaratHandler,
    searchCaratsHandler
} = require('./caratsHandler');

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
    deleteMetalHandler,
    searchMetalHandler,
    listCaratsHandler,
    registerCaratHandler,
    editCaratHandler,
    deleteCaratHandler,
    findCaratHandler,
    searchCaratsHandler,
    listProductLinesHandler,
    registerProductLineHandler,
    editProductLineHandler,
    findProductLineHandler
}

