const { Metal } = require('../models');


/**
 * Retrieves a list of all metals in the DB.
 */
const fetchMetals = async () => {
    try {
        return await Metal.fetchAll();
    } catch (error) {
        console.error('Error in fetchMetals:', error.message);
        throw new Error('Failed to fetch metals from database');
    }
};

/**
 * Registers a new metal in the database.
 * @param {Object} metalParams - Object with metal data.
 * @returns {Promise<Object>} - Created metal instance.
 */
const registerMetal = async (metalParams) => {
    return await Metal.create(metalParams);
};

/**
 * Updates metal instance information.
 * @param {Object} metalParams - Metal attributes to be updated.
 * @param {number} id - Metal ID.
 * @returns {Promise<number>} - 1 if succeeded, 0 if failed.
 */
const editMetal = async (id, metalParams) => {
    const [updated] = await Metal.update(metalParams, {
        where: { id }
    });
    return updated;
};

/**
 * Retrieves a metal instance by its ID.
 * @param {number} id - Metal ID.
 * @returns {Promise<Object|null>} - Metal instance, or null if not found.
 */
const getMetalByPk = async (id) => {
    return await Metal.findByPk(id);
};

/**
 * Deletes a metal instance.
 * @param {number} id - Metal ID.
 * @returns {Promise<number>} - 1 if succeeded, 0 if failed.
 */
const deleteMetal = async (id) => {
    return await Metal.destroy({ where: { id } });
};

/**
 * Searches for metals matching the provided search parameter.
 * @param {string} searchParameter - Search string parameter.
 * @returns {Promise<Array>} - List of metals matching the search criteria.
 */
const searchMetals = async (searchParameter) => {
    return await Metal.findAll({
        where: {
            metal: searchParameter
        }
    });
};

// Exports
module.exports = {
    fetchMetals,
    registerMetal,
    editMetal,
    getMetalByPk,
    deleteMetal,
    searchMetals
};
