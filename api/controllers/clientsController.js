//required models
const { Client } = require('../models/index');
const { Op, where } = require('sequelize');
//controller functions

/**
 * get all clients in DB 
 * @returns - list of all clients 
 */
const listClients = async () => {
    //get list of all clients
    const clients = await Client.findAll();
    //return clients list
    return clients;
}

/**
 * get client by id
 * @param {*} id - id client to be found
 * @returns  - client found in DB
 */
const getClientById = async (id) => {
    //get client by id
    const client = await Client.findAll({
        where: {
            id
        }
    });
    //return client 
    return client;
}

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

/**
 * edits client info 
 * @param {*} clientParams - client attributes to be updated
 * @param {*} id - client id 
 * @returns - returns 1 if it succeeded 0 if it failed
 */
const editClient = async (clientParams, id) => {
    //edit client info
    const client = await Client.update(
        clientParams,
        {
            where: {
                id
            },
        },
    );
    //returns 1 if it succeeded 0 if it failed
    return client;
}

/**
 * deletes client 
 * @param {*} id - client id
 * @returns - returns 1 if it succeeded 0 if it failed
 */
const deleteClient = async (id) => {
    //deletes client
    const client = await Client.destroy({
        where: {
            id,
        },
    });
    //returns 1 if it succeeded 0 if it failed
    return client;
}

/**
 * search for clients matching the search string parameter
 * @param {*} searchParam - search string parameter
 * @returns - list of clients matching string parameter
 */
const searchClients = async (searchParam) => {
    //search clients
    const clients = Client.findAll({
        where: {
            [Op.or]: [
                { names: searchParam },
                { firstLastName: searchParam },
                { secondLastName: searchParam }
            ]
        }
    });
    //return clients
    return clients;
}

//exports
module.exports = {
    listClients,
    getClientById,
    registerClient,
    editClient,
    deleteClient,
    searchClients
}