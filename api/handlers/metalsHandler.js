//required modules
const {
    listMetals,
    registerMetal,
    editMetal,
    getMetalByPk,
    deleteMetal,
    searchMetals
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

/**
 * handles logic to update metal info
 * @param {*} req - request object, contains form input data
 * @param {*} res - response object
 * @returns - updated metal instance
 */

const editMetalHandler = async (req, res) => {
    try {
        //metal id
        const { id } = req.params;
        //form metal data to be updated
        const metalData = req.body;
        //call function edit metal 
        const metal = await editMetal(metalData, id);
        //returns 1 if it succeeded 0 if it failed
        return res.status(201).json(metal);
    } catch (error) {
        //handle errors
        console.error(error.message);
        res.status(500).json({ message: 'Error editing metal', error: error.message });

    }
}

/**
 * handles logic to get a metal by id 
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns - returns metal instance by id
 */
const getMetalHandler = async (req, res) => {

    try {
        //metal id
        const { id } = req.params;
        //call get metal by pk function
        const metal = await getMetalByPk(id);
        //return metal 
        return res.status(200).json(metal);
    } catch (error) {
        //handle errors
        console.error(error.message);
        res.status(500).json({ message: 'Error finding metal', error: error.message });

    }
}

/**
 * handles logic to delete metal
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns - returns 1 if it succeeded 0 if it falied

 */

const deleteMetalHandler = async (req, res) => {

    try {
        //metal id
        const { id } = req.params;
        //call delete metal handler
        const metal = await deleteMetal(id);
        //returns 1 if it succeeded 0 if it falied
        return res.status(200).json(metal);
    } catch (error) {
        //handle errors
        console.error(error.message);
        res.status(500).json({ message: 'Error deleting metal', error: error.message });
    }
}

/**
 * handle logic to search for metals
 * @param {*} req - request object, contains form input data
 * @param {*} res - response object
 * @returns - list of metals found in json format
 */

const searchMetalHandler = async (req, res) => {
    try {
        //search parameter
        const { searchParam } = req.body;
        //call search metals function
        const metals = await searchMetals(searchParam);
        //list of found metals
        return res.status(200).json(metals);
    } catch (error) {
        //handle errors
        console.error(error.message);
        res.status(500).json({ message: 'Error searching metal', error: error.message });
    }
}

//exports 
module.exports = {
    listMetalsHandler,
    registerMetalHandler,
    editMetalHandler,
    getMetalHandler,
    deleteMetalHandler,
    searchMetalHandler
}