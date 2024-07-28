//required controllers
const {
    registerClient
} = require('../controllers');

//handler functions
/**
 * handle logic to register a new client
 * @param {*} req - request object 
 * @param {*} res - response object
 * @returns - created client instance
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

//exports 
module.exports = {
    registerClientHandler
}