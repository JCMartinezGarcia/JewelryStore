const {
    listProductLines,
    registerProductLine,
    editProductLine,
    findProductLineByPk
} = require('../controllers');


function handleError(res, message, error) {
    console.error(message, error);
    res.status().json({ error: message, message: error.message });
}

/**
 * Handle logic to obtain a list of product lines
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns {Promise<Array>} Array of objects
 */
const listProductLinesHandler = async (req, res) => {
    try {
        const productLines = await listProductLines();
        res.status(200).json(productLines);
    } catch (error) {
        handleError(res, 'Error listing product lines', error);
    }
}

/**
 * Handles logic to register new product line 
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @returns {Promise<Object>} Registered PL 
 */
const registerProductLineHandler = async (req, res) => {
    try {
        const productLine = await registerProductLine(req.body);
        res.status(201).json(productLine);
    } catch (error) {
        handleError(res, 'Error registering product line', error);
    }
}

/**
 * Handles logic to edit entry
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns {Promise<number>} 1 if succeeded, 0 if failed
 */
const editProductLineHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const productLine = editProductLine(req.body, id);
        res.status(202).json(productLine);
    } catch (error) {
        handleError(res, 'Error editing product line', error);
    }
}

/**
 * Handles logic to find an entry by pk
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns {Promise<Object>} found entry 
 */
const findProductLineHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const productLine = await findProductLineByPk(id);
        res.status(200).json(productLine);
    } catch (error) {
        handleError(res, 'Error finding product line', error);
    }
}

module.exports = {
    listProductLinesHandler,
    registerProductLineHandler,
    editProductLineHandler,
    findProductLineHandler
}