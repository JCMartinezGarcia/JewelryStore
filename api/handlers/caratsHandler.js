// Required modules
const {
    listCarats,
    registerCarat,
    editCarat
} = require('../controllers');

// Helper function to handle errors
const handleError = (res, message, error) => {
    console.error(message, error);
    res.status(500).json({ error: message, message: error.message });
};

// Handler functions

/**
 * Handles logic to list carats
 * @param {*} req 
 * @param {*} res 
 * @returns {Promise<*>} List of carats in JSON format
 */
const listCaratsHandler = async (req, res) => {
    try {
        const carats = await listCarats();
        res.status(200).json(carats);
    } catch (error) {
        handleError(res, 'Error listing carats', error);
    }
};

/**
 * Handles logic to register a new carat
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @returns {Promise<*>} Newly created carat instance in JSON format
 */
const registerCaratHandler = async (req, res) => {
    try {
        const carat = await registerCarat(req.body);
        res.status(201).json(carat);
    } catch (error) {
        handleError(res, 'Error registering carat', error);
    }
};

/**
 * Handles logic to edit carat instance
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @returns {Promise<number>} 1 if succeeded, 0 if failed
 */
const editCaratHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const carat = await editCarat(req.body, id);
        res.status(202).json(carat);
    } catch (error) {
        handleError(res, 'Error editing carat', error);
    }
};

// Exports 
module.exports = {
    listCaratsHandler,
    registerCaratHandler,
    editCaratHandler
};
