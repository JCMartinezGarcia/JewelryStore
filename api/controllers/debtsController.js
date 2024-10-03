const { Debt } = require('../models');

/**
 * Retrieves a list of all debts in the database.
 * @returns {Promise<Array>} - List of carats.
 */
const listDebts = () => {
    return Debt.findAll();
};

/**
 * Registers a new debt instance in the database.
 * @param {Object} data - Debt data to be registered.
 * @returns {Promise<Object>} - Created deabt instance.
 */
const registerDebt = (data) => {
    return Debt.create(data);
};

/**
 * Updates an existing debt instance.
 * @param {number} id - Debt ID.
 * @param {Object} caratParams - Debt attributes to be updated.
 * @returns {Promise<number>} - Number of affected rows (1 if succeeded, 0 if failed).
 */

const editDebt = async (id, params) => {
    const [updated] = await Debt.update(params, { where: { id } });
    return updated;
};

/**
 * Deletes a debt instance from the database.
 * @param {number} id - Debt ID.
 * @returns {Promise<number>} - Number of affected rows (1 if succeeded, 0 if failed).
 */
const deleteDebt = (id) => {
    return Debt.destroy({ where: { id } });
};

/**
 * Retrieves a single instance by its primary key (PK).
 * @param {number} id - Debt details ID.
 * @returns {Promise<Object|null>} - Found instance or null if not found.
 */
const findDebtDetails = (id) => {
    return Debt.findByPk(id);
};

/**
 * Searches for debts matching a given search parameter.
 * @param {string} idClient - Search parameter.
 * @returns {Promise<Array>} - List of debts matching the search parameter.
 */
const searchDebts = (idClient) => {
    return Debt.findAll({ where: { idClient } });
};

module.exports = {
    listDebts,
    registerDebt,
    editDebt,
    deleteDebt,
    findDebtDetails,
    searchDebts
};
