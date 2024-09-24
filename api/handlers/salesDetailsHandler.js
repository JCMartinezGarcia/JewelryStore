const {
    listSaleDetail,
    registerSaleDetails,
    editSaleDetail
    // registerSale,
    // editSale,
    // findSaleByPk,
    // searchSales,
    // cancelSale
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
 * Handles logic to list sale detail
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @returns {Promise<void>} Sends detail in JSON format
 */

const listSaleDetailsHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const detail = await listSaleDetail(id);
        res.status(200).json(detail);
    } catch (error) {
        handleError(res, 'Error listing sale detail', error);
    }
}

/**
 * Handles logic to register sale deatils.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the registered details instance in JSON format.
 */

const registerSaleDetailsHandler = async (req, res) => {
    try {
        const registered = await registerSaleDetails(req.body);
        res.status(201).json(registered);
    } catch (error) {
        handleError(res, 'Error registering sale details', error);
    }

}

/**
 * Handles logic to edit sale details 
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @returns {Promise<void>} Sends the result of the object operation
 */
const editSaleDetailsHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const edited = await editSaleDetail(id, req.body);
        res.status(202).json({ success: edited === 1 });
    } catch (error) {
        handleError(res, 'Error editing sale details', error);
    }
}

// /**
//  * Handles logic to find a sale by its primary key (PK).
//  * @param {Object} req - Request object.
//  * @param {Object} res - Response object.
//  * @returns {Promise<void>} - Sends the found sale instance.
//  */
// const findSaleHandler = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const sale = await findSaleByPk(id);
//         res.status(200).json(sale);
//     } catch (error) {
//         handleError(res, 'Error finding sale', error);
//     }
// }


// /**
//  * Handles logic to search for sales matching a search parameter.
//  * @param {Object} req - Request object.
//  * @param {Object} res - Response object.
//  * @returns {Promise<void>} - Sends a list of sales matching the search parameter.
//  */
// const searchSalesHandler = async (req, res) => {
//     try {
//         const { folio } = req.body;
//         const sales = await searchSales(folio);
//         res.status(200).json(sales);
//     } catch (error) {
//         handleError(res, 'Error searching sales', error);
//     }
// }

// /**
//  * Handles login to cancel an existing sale
//  * @param {*} req - Request object
//  * @param {*} res - Response object
//  * @returns {Promise<void>} Sends the result of the delete operation.
//  */
// const cancelSaleHandler = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const canceled = await cancelSale(id);
//         res.status(200).json({ success: canceled === 1 });
//     } catch (error) {
//         handleError(res, 'Error canceling sale', error);
//     }
// }

module.exports = {
    listSaleDetailsHandler,
    registerSaleDetailsHandler,
    editSaleDetailsHandler
    // listSalesHandler,
    // registerSaleHandler,
    // editSaleHandler,
    // findSaleHandler,
    // searchSalesHandler,
    // cancelSaleHandler
}

