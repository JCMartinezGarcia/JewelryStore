//required models
const { Client } = require('../models/index');

//controller functions

/**
 * registers a new client instance in DB
 * @param {*} clientParams - object with client data
 * @returns - created client instance
 */
const registerClient = async (clientParams) => {
    // register a new client
    const client = await Client.create(clientParams);
    // return created client
    return client;
}


//exports
module.exports = {
    registerClient,
}