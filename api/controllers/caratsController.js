// Required modules
const { Carat } = require('../models');

// Controller functions

/**
 * Obtains list of carats
 * @returns {Promise<Array>} List of carats in the database
 */
const listCarats = async () => {
    return await Carat.findAll();
};

/**
 * Registers a new carat instance in the database
 * @param {Object} caratParams - Carat data to be registered
 * @returns {Promise<Object>} Created carat instance
 */
const registerCarat = async (caratParams) => {
    return await Carat.create(caratParams);
};

/**
 * Edits an existing carat instance
 * @param {Object} caratParams - Carat attributes to be updated
 * @param {number} id - Carat ID
 * @returns {Promise<number>} 1 if succeeded, 0 if failed
 */
const editCarat = async (caratParams, id) => {
    return await Carat.update(caratParams, { where: { id } });
};

module.exports = {
    listCarats,
    registerCarat,
    editCarat
};
