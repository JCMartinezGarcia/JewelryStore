//required modules
const {
    listMetals,
    registerMetal,
} = require('../controllers');

//handler functions

/**
 * handles logic to list all metals in db
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns - lsit of metals on json format
 */

const listMetalsHandler = async (req, res) => {

    try {
        //call to list metals function
        const metals = await listMetals();
        //return status and list of metals
        return res.status(200).json(metals);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'error listing metals', message: error.message });
    }
}

/**
 * handle logic to register a new metal
 * @param {*} req - request object 
 * @param {*} res - response object
 * @returns - created metal instance in json format
 */
const registerMetalHandler = async (req, res) => {
    try {
        //metal form data 
        const metalData = req.body;
        //call to register function
        const metal = await registerMetal(metalData);
        //return status and created metal
        return res.status(201).json(metal);
    } catch (error) {
        //handle errors
        console.error(error.message);
        res.status(500).json({ message: 'Error registering a new metal', error: error.message });
    }
}

//exports 
module.exports = {
    listMetalsHandler,
    registerMetalHandler,
}