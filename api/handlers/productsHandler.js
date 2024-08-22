const {
    registerProduct
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
 * Handles logic to register new product
 * @param {*} req - Request Object
 * @param {*} res - Response Object
 * @returns {Promise<Object>} Registered instance
 */
const registerProductHandler = async (req, res) => {
    try {
        const regProd = await registerProduct(req.body);
        res.status(201).json(regProd);
    } catch (error) {
        handleError(res, 'Error registering product:', error);
    }
}

module.exports = {
    registerProductHandler
}
