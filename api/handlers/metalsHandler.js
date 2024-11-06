// Required modules
const {
    listMetals,
    registerMetal,
    editMetal,
    getMetalByPk,
    deleteMetal,
    searchMetals
} = require('../controllers');

function handleError(res, msg, error) {
    console.error(msg, error);
    res.status(500).json({ error: msg, message: msg });
}

/**
 * Handles logic to list all metals in the database.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - List of metals in JSON format.
 */
const listMetalsHandler = async (req, res) => {
    try {
        const metals = await listMetals();
        res.status(200).json(metals);
    } catch (error) {
        handleError(res, 'Error listing metals:', error);
    }
};

/**
 * Handles logic to register a new metal.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Created metal instance in JSON format.
 */
const registerMetalHandler = async (req, res) => {
    try {
        const metal = await registerMetal(req.body);
        res.status(201).json(metal);
    } catch (error) {
        handleError(res, 'Error registering metal:', error);
    }
};

/**
 * Handles logic to update metal information.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} Success or failure indicator in JSON format.
 */
const editMetalHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await editMetal(id, req.body);
        res.status(200).json({ success: result === 1 });
    } catch (error) {
        handleError(res, 'Error editing metal:', error);
    }
};

/**
 * Handles logic to get a metal by its ID.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Metal instance in JSON format.
 */
const getMetalHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const metal = await getMetalByPk(id);
        res.status(200).json(metal);
    } catch (error) {
        handleError(res, 'Error finding metal:', error);
    }
};

/**
 * Handles logic to delete a metal.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Success or failure indicator in JSON format.
 */
const deleteMetalHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteMetal(id);
        res.status(200).json({ success: result === 1 });
    } catch (error) {
        handleError(res, 'Error deleting metal:', error);
    }
};

/**
 * Handles logic to search for metals.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<Array>} - List of metals found in JSON format.
 */
const searchMetalHandler = async (req, res) => {
    try {
        const { searchParam } = req.body;
        const metals = await searchMetals(searchParam);
        res.status(200).json(metals);
    } catch (error) {
        handleError(res, 'Error searching metals:', error);
    }
};

// Exports
module.exports = {
    listMetalsHandler,
    registerMetalHandler,
    editMetalHandler,
    getMetalHandler,
    deleteMetalHandler,
    searchMetalHandler
};
