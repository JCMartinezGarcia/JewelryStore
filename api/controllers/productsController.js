const { Product } = require('../models');

/**
 * Registers a new product in the database.
 * @param {Object} params - Data to be inserted in the database as a new entry.
 * @returns {Promise<Object>} - Registered entry.
 */
const registerProduct = async (params) => {
    return Product.create(params);
};

/**
 * Retrieves a list of all products in the database.
 * @returns {Promise<Array>} - Array of product objects.
 */
const listProducts = async () => {
    return Product.findAll();
};

/**
 * Updates an existing product instance.
 * @param {number} id - Product ID.
 * @param {Object} params - Product attributes to be updated.
 * @returns {Promise<number>} - Number of affected rows (1 if succeeded, 0 if failed).
 */
const editProduct = async (id, params) => {
    const [updated] = await Product.update(params, { where: { id } });
    return updated;
};

/**
 * Deletes an existing product instance.
 * @param {number} id - Product ID.
 * @returns {Promise<number>} - Number of affected rows (1 if succeeded, 0 if failed).
 */
const deleteProduct = async (id) => {
    return Product.destroy({ where: { id } });
};

/**
 * Searches for products matching a given search string.
 * @param {string} searchString - Search string to match against product model.
 * @returns {Promise<Array>} - Array of products matching the search criteria.
 */
const searchProducts = async (searchString) => {
    return Product.findAll({ where: { model: searchString } });
};

/**
 * Finds a product by its primary key (PK).
 * @param {number} id - Product ID.
 * @returns {Promise<Object|null>} - Found product or null if not found.
 */
const findProductByPk = async (id) => {
    return Product.findByPk(id);
};

module.exports = {
    listProducts,
    registerProduct,
    editProduct,
    deleteProduct,
    searchProducts,
    findProductByPk
};
