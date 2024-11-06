const {
    listProductLines,
    registerProductLine,
    editProductLine,
    findProductLineByPk,
    deleteProductLine,
    searchProductLines
} = require('../controllers');

/**
 * Helper function to handle errors.
 * @param {Object} res - Response object.
 * @param {string} message - Error message.
 * @param {Error} error - Error object.
 */
function handleError(res, message, error) {
    console.error(`${message}:`, error.message);
    res.status(500).json({ error: message, message: error.message });
}

/**
 * Handles logic to obtain a list of product lines.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends a list of product lines in JSON format.
 */
const listProductLinesHandler = async (req, res) => {
    try {
        const productLines = await listProductLines();
        res.status(200).json(productLines);
    } catch (error) {
        handleError(res, 'Error listing product lines', error);
    }
};

/**
 * Handles logic to register a new product line.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the registered product line in JSON format.
 */
const registerProductLineHandler = async (req, res) => {
    try {
        const productLine = await registerProductLine(req.body);
        res.status(201).json(productLine);
    } catch (error) {
        handleError(res, 'Error registering product line', error);
    }
};

/**
 * Handles logic to edit a product line.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the result of the edit operation in JSON format.
 */
const editProductLineHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await editProductLine(id, req.body);
        res.status(202).json({ success: updated === 1 });
    } catch (error) {
        handleError(res, 'Error editing product line', error);
    }
};

/**
 * Handles logic to find a product line by primary key (PK).
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the found product line in JSON format.
 */
const findProductLineHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const productLine = await findProductLineByPk(id);
        res.status(200).json(productLine);
    } catch (error) {
        handleError(res, 'Error finding product line', error);
    }
};

/**
 * Handles logic to delete a product line.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the result of the delete operation in JSON format.
 */
const deleteProductLineHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteProductLine(id);
        res.status(200).json({ success: deleted === 1 });
    } catch (error) {
        handleError(res, 'Error deleting product line', error);
    }
};

/**
 * Handles logic to search for product lines matching a search parameter.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends a list of matching product lines in JSON format.
 */
const searchProductLineHandler = async (req, res) => {
    try {
        const { searchParam } = req.body;
        const productLines = await searchProductLines(searchParam);
        res.status(200).json(productLines);
    } catch (error) {
        handleError(res, 'Error searching product lines', error);
    }
};

module.exports = {
    listProductLinesHandler,
    registerProductLineHandler,
    editProductLineHandler,
    findProductLineHandler,
    deleteProductLineHandler,
    searchProductLineHandler
};
