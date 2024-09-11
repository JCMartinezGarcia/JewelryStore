const {
    listSales,
    registerSale,
    editSale,
    findSaleByPk,
    searchSales,
    cancelSale
} = require('../controllers');

/**
 * Helper function to handle errors.
 * @param {Object} res - Response object.
 * @param {string} message - Error message.
 * @param {Error} error - Error object.
 */
const handleError = (res, message, error) => {
    console.error(`${message}:`, error.message);
    res.status(500).json({ error: message, message: error.message });
};

/**
 * Handles login to list sales
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @returns {Promise<void>} Sends the list of products in JSON format
 */
const listSalesHandler = async (req, res) => {
    try {
        const sales = await listSales();
        res.status(200).json(sales);
    } catch (error) {
        handleError(res, 'Error listing sales', error);
    }
}

/**
 * Handles logic to register a new sale.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the registered sale instance in JSON format.
 */

const registerSaleHandler = async (req, res) => {
    try {
        const registered = await registerSale(req.body);
        res.status(201).json(registered);
    } catch (error) {
        handleError(res, 'Error registering sale', error);
    }

}

/**
 * Handles logic to edit a sale instance 
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @returns {Promise<void>} Sends the result of the object operation
 */
const editSaleHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const edited = await editSale(id, req.body);
        res.status(202).json({ success: edited === 1 });
    } catch (error) {
        handleError(res, 'Error editing sale', error);
    }
}

/**
 * Handles logic to find a sale by its primary key (PK).
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the found sale instance.
 */
const findSaleHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const sale = await findSaleByPk(id);
        res.status(200).json(sale);
    } catch (error) {
        handleError(res, 'Error finding sale', error);
    }
}


/**
 * Handles logic to search for sales matching a search parameter.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends a list of sales matching the search parameter.
 */
const searchSalesHandler = async (req, res) => {
    try {
        const { folio } = req.body;
        const sales = await searchSales(folio);
        res.status(200).json(sales);
    } catch (error) {
        handleError(res, 'Error searching sales', error);
    }
}

/**
 * Handles login to cancel an existing sale
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @returns {Promise<void>} Sends the result of the delete operation.
 */
const cancelSaleHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const canceled = await cancelSale(id);
        res.status(200).json({ success: canceled === 1 });
    } catch (error) {
        handleError(res, 'Error canceling sale', error);
    }
}

module.exports = {
    listSalesHandler,
    registerSaleHandler,
    editSaleHandler,
    findSaleHandler,
    searchSalesHandler,
    cancelSaleHandler
}

