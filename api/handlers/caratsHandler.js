const {
    listCarats,
    registerCarat,
    editCarat,
    deleteCarat,
    findCaratByPk,
    searchCarats
} = require('../controllers');

const handleError = (res, message, error) => {
    console.error(`${message}:`, error.message);
    res.status(500).json({ error: message, message: error.message });
};

/**
 * Handles logic to list carats.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends a list of carats in JSON format.
 */const listCaratsHandler = async (req, res) => {
    try {
        const carats = await listCarats();
        res.status(200).json(carats);
    } catch (error) {
        handleError(res, 'Error listing carats', error);
    }
};

/**
 * Handles logic to register a new carat.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the newly created carat instance in JSON format.
 */const registerCaratHandler = async (req, res) => {
    try {
        const carat = await registerCarat(req.body);
        res.status(201).json(carat);
    } catch (error) {
        handleError(res, 'Error registering carat', error);
    }
};

/**
 * Handles logic to edit a carat instance.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the result of the update operation.
 */const editCaratHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await editCarat(id, req.body);
        res.status(202).json({ success: updated === 1 });
    } catch (error) {
        handleError(res, 'Error editing carat', error);
    }
};

/**
 * Handles logic to delete a carat instance.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the result of the delete operation.
 */
const deleteCaratHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteCarat(id);
        res.status(200).json({ success: deleted === 1 });
    } catch (error) {
        handleError(res, 'Error deleting carat', error);
    }
};

/**
 * Handles logic to find a carat by its primary key (PK).
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the found carat instance.
 */
const findCaratHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const carat = await findCaratByPk(id);
        res.status(200).json(carat);
    } catch (error) {
        handleError(res, 'Error finding carat', error);
    }
};

/**
 * Handles logic to search for carats matching a search parameter.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends a list of carats matching the search parameter.
 */const searchCaratsHandler = async (req, res) => {
    try {
        const { searchParam } = req.body;
        const carats = await searchCarats(searchParam);
        res.status(200).json(carats);
    } catch (error) {
        handleError(res, 'Error searching carats', error);
    }
};

module.exports = {
    listCaratsHandler,
    registerCaratHandler,
    editCaratHandler,
    deleteCaratHandler,
    findCaratHandler,
    searchCaratsHandler
};
