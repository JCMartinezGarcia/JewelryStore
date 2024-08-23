const { Product } = require('../models');

/**
 * Registers new entry in Database
 * @param {Object} params - Data to be inserted in database as new entry
 * @returns {Promise<Object>} Registered entry 
 */
const registerProduct = async (params) => {
    return Product.create(params);
}

module.exports = {
    registerProduct
}