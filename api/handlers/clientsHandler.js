//required controllers
const {
    listClients,
    getClientById,
    registerClient,
    editClient,
    deleteClient,
    searchClients
} = require('../controllers');

//handler functions

/**
 * handle return a list of all clients 
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns - list of all clients in json format
 */
const listClientsHandler = async (req, res) => {
    try {
        //call list clients function
        const clients = await listClients();
        //return list of clients
        return res.status(200).json(clients);
    } catch (error) {
        //handle errors
        console.error(error.message);
        res.status(500).json({ message: 'Error listing clients', error: error.message });

    }
}

/**
 *handle login to find a client by id
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns - client by id in json format
 */
const getClientHandler = async (req, res) => {
    try {
        //destrucure id from url params
        const { id } = req.params;
        //call to get client by id function
        const client = await getClientById(id);
        //return found client
        return res.status(200).json(client);
    } catch (error) {
        //handle errors
        console.error(error.message);
        res.status(500).json({ message: 'Error finding client', error: error.message });
    }
}

/**
 * handle logic to register a new client
 * @param {*} req - request object 
 * @param {*} res - response object
 * @returns - created client instance in json format
 */
const registerClientHandler = async (req, res) => {
    try {
        //client form data 
        const clientData = req.body;
        //call to register function
        const client = await registerClient(clientData);
        //return status and created client
        return res.status(201).json(client);
    } catch (error) {
        //handle errors
        console.error(error.message);
        res.status(500).json({ message: 'Error registering a new client', error: error.message });

    }
}

/**
 * handles login to edit a client
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns - edited client in json format
 */
const editClientHandler = async (req, res) => {
    try {
        //client id 
        const { id } = req.params;
        //client data to be updated
        const clientData = req.body;
        //call edit client function
        const client = await editClient(clientData, id);
        //return edited client
        return res.status(201).json(client);
    } catch (error) {
        //handle errors
        console.error(error.message);
        res.status(500).json({ message: 'Error editing client', error: error.message });

    }
}

/**
 * handles login to delete a client
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns - 
 */
const deleteClientHandler = async (req, res) => {
    try {
        //client id
        const { id } = req.params;
        //call delete client function
        const client = deleteClient(id);
        //return response status
        return res.status(200).json(client);
    } catch (error) {
        //handle errors
        console.error(error.message);
        res.status(500).json({ message: 'Error deleting client', error: error.message });
    }
}

/**
 * handles logic to search for clients
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns - list of clients matching the search string parameter
 */
const searchClientsHandler = async (req, res) => {
    try {
        //destructure search parameter
        const { searchParam } = req.body;
        //call search clients function 
        const clients = await searchClients(searchParam);
        //return list of clients 
        return res.status(200).json(clients);
    } catch (error) {
        //handle errors
        console.error(error.message);
        res.status(500).json({ message: 'Error searching clients', error: error.message });

    }
}

//exports 
module.exports = {
    listClientsHandler,
    getClientHandler,
    registerClientHandler,
    editClientHandler,
    deleteClientHandler,
    searchClientsHandler
}