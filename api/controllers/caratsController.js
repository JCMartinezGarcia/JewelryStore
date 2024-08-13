// Required modules
const { where } = require('sequelize');
const { Carat } = require('../models');
const carat = require('../models/carat');

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

/**
 * Deletes carat instance
 * @param {*} id 
 * @returns {Promise<number>} 1 if succeeded, 0 if failed
 */
const deleteCarat = async (id) => {
    return await Carat.destroy({ where: { id } });
};

/**
 * Obtains a single register form table by pk
 * @param {*} id 
 * @returns {Promise<Object>} Found register in db 
 */

const findCaratByPk = async (id) => {
    return await Carat.findByPk(id);
}

/**
 * Search for registers matching string parameter
 * @param {*} searchParam - String search parameter
 * @returns {Promise<Array>} Registers matching search param
 */

const searchCarats = async (searchParam) => {
    return await Carat.findAll({ where: { carat: searchParam } });
}

module.exports = {
    listCarats,
    registerCarat,
    editCarat,
    deleteCarat,
    findCaratByPk,
    searchCarats
};
