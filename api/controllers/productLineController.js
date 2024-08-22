const { ProductLine } = require('../models');

/**
 * Registers a new product line in the database.
 * @param {Object} params - Data to be registered.
 * @returns {Promise<Object>} - Newly registered entry.
 */const registerProductLine = async (params) => {
    return ProductLine.create(params);
};

/**
 * Retrieves all product lines from the database.
 * @returns {Promise<Array>} - Array of product line objects.
 */const listProductLines = async () => {
    return ProductLine.findAll();
};

/**
 * Updates a product line entry in the database.
 * @param {Object} params - Data to be updated.
 * @param {number} id - Entry ID.
 * @returns {Promise<number>} - 1 if succeeded, 0 if failed.
 */const editProductLine = async (id, params) => {
    const [updated] = await ProductLine.update(params, { where: { id } });
    return updated;
};

/**
 * Retrieves a product line by its primary key (PK).
 * @param {number} id - Entry ID.
 * @returns {Promise<Object|null>} - Found entry or null if not found.
 */const findProductLineByPk = async (id) => {
    return ProductLine.findByPk(id);
};

/**
 * Deletes a product line entry from the database.
 * @param {number} id - Entry ID.
 * @returns {Promise<number>} - 1 if succeeded, 0 if failed.
 */const deleteProductLine = async (id) => {
    return ProductLine.destroy({ where: { id } });
};

/**
 * Searches for product lines matching a given search parameter.
 * @param {string} searchParam - Search parameter.
 * @returns {Promise<Array>} - Array of product lines matching the search parameter.
 */const searchProductLines = async (searchParam) => {
    return ProductLine.findAll({ where: { line: searchParam } });
};

module.exports = {
    listProductLines,
    registerProductLine,
    editProductLine,
    findProductLineByPk,
    deleteProductLine,
    searchProductLines
};
