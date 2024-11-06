const { Carat } = require('../models');

/**
 * Retrieves a list of all carats in the database.
 * @returns {Promise<Array>} - List of carats.
 */
const listCarats = async () => {
    return Carat.findAll();
};

/**
 * Registers a new carat instance in the database.
 * @param {Object} caratParams - Carat data to be registered.
 * @returns {Promise<Object>} - Created carat instance.
 */
const registerCarat = async (caratParams) => {
    return Carat.create(caratParams);
};

/**
 * Updates an existing carat instance.
 * @param {number} id - Carat ID.
 * @param {Object} caratParams - Carat attributes to be updated.
 * @returns {Promise<number>} - Number of affected rows (1 if succeeded, 0 if failed).
 */

const editCarat = async (id, caratParams) => {
    const [updated] = await Carat.update(caratParams, { where: { id } });
    return updated;
};

/**
 * Deletes a carat instance from the database.
 * @param {number} id - Carat ID.
 * @returns {Promise<number>} - Number of affected rows (1 if succeeded, 0 if failed).
 */
const deleteCarat = async (id) => {
    return Carat.destroy({ where: { id } });
};

/**
 * Retrieves a single carat instance by its primary key (PK).
 * @param {number} id - Carat ID.
 * @returns {Promise<Object|null>} - Found carat instance or null if not found.
 */
const findCaratByPk = async (id) => {
    return Carat.findByPk(id);
};

/**
 * Searches for carats matching a given search parameter.
 * @param {string} searchParam - Search parameter.
 * @returns {Promise<Array>} - List of carats matching the search parameter.
 */
const searchCarats = async (searchParam) => {
    return Carat.findAll({ where: { carat: searchParam } });
};

module.exports = {
    listCarats,
    registerCarat,
    editCarat,
    deleteCarat,
    findCaratByPk,
    searchCarats
};
