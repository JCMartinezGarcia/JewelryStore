const {
    registerProductLine
} = require('../controllers');


function handleError(res, message, error) {
    console.error(message, error);
    res.status().json({ error: message, message: error.message });
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

module.exports = {
    registerProductLineHandler
}