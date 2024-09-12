const { Sale } = require('../models');

/**
 * Registers a new sale in the database.
 * @param {Object} params - Data to be inserted in the database as a new entry.
 * @returns {Promise<Object>} - Registered entry.
 */
const registerSale = async (params) => {
    const sale = await Sale.create(params);
    await Sale.update({ folio: '0' + sale.id.toString() }, { where: { id: sale.id } });
    return Sale.findByPk(sale.id);
}

/**
 * Updates an existig sale instance
 * @param {Number} id - Sale ID
 * @param {Object} params - Sale attributes to be updated
 * @returns Number of affected rows (1 if succeeded, 0 if failed).
 */
const editSale = async (id, params) => {
    const [updated] = await Sale.update(params, { where: { id } });
    return updated;
}

/**
 * Retrieves a list of all sales in the database
 * @returns {Promise<Array>} List of sales
 */
const listSales = () => {
    return Sale.findAll({ where: { isCancel: false } });
}

/**
 * Retrieves a single sale instance by its primary key (PK).
 * @param {number} id - Sale ID.
 * @returns {Promise<Object|null>} - Found sale instance or null if not found.
 */
const findSaleByPk = (id) => {
    return Sale.findByPk(id);
}

/**
 * Searches for sale matching a given search parameter.
 * @param {string} folio - Search parameter.
 * @returns {Promise<Array>} - List of sales matching the search parameter.
 */
const searchSales = (folio) => {
    return Sale.findAll({ where: { folio } });
}

/**
 * Cancels an existing sale.
 * @param {number} id - Sale ID.
 * @returns {Promise<number>} - Number of affected rows (1 if succeeded, 0 if failed).
 */
const cancelSale = async (id) => {
    const [canceled] = await Sale.update({ isCancel: true }, { where: { id } });
    return canceled;
}

module.exports = {
    listSales,
    registerSale,
    editSale,
    findSaleByPk,
    searchSales,
    cancelSale
}