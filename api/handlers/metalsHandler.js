const {
    fetchMetals,
    registerMetal,
    editMetal,
    getMetalByPk,
    deleteMetal,
    searchMetals
} = require('../controllers');

const Joi = require("joi");

const metalSchema = Joi.object({
    metal: Joi.string().required()
});

const handleError = (res, message, error) => {
    console.error(`${message} ${error.message || error}`);
    res.status(500).json({
        message,
        error: error.message || 'Internal Server Error',
    });
};

/**
 * Handles logic to fetch registers in DB
 */
const fetchMetalsHandler = async (req, res) => {
    try {
        const metals = await fetchMetals();
        res.status(200).json(metals);
    } catch (error) {
        handleError(res, 'Error fetching metals:', error);
    }
};

/**
 * Handles logic to register a new metal.
 */
const registerMetalHandler = async (req, res) => {

    const { error } = metalSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const metal = await registerMetal(req.body);
        res.status(201).json({ success: true, message: 'Metal registrado con éxito', data: metal });
    } catch (error) {
        // if (error.name === 'SequelizeUniqueConstraintError') {
        //     return res.status(409).json({ message: 'Metal already exists.' });
        // }
        handleError(res, 'Error registering metal:', error);
    }
};

/**
 * Handles logic to update metal information.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} Success or failure indicator in JSON format.
 */
const editMetalHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await editMetal(id, req.body);
        res.status(200).json({ success: result === 1 });
    } catch (error) {
        handleError(res, 'Error editing metal:', error);
    }
};

/**
 * Handles logic to get a metal by its ID.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Metal instance in JSON format.
 */
const getMetalHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const metal = await getMetalByPk(id);
        res.status(200).json(metal);
    } catch (error) {
        handleError(res, 'Error finding metal:', error);
    }
};

/**
 * Handles logic to delete a metal.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Success or failure indicator in JSON format.
 */
const deleteMetalHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteMetal(id);
        res.status(200).json({ success: result === 1 });
    } catch (error) {
        handleError(res, 'Error deleting metal:', error);
    }
};

/**
 * Handles logic to search for metals.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<Array>} - List of metals found in JSON format.
 */
const searchMetalHandler = async (req, res) => {
    try {
        const { searchParam } = req.body;
        const metals = await searchMetals(searchParam);
        res.status(200).json(metals);
    } catch (error) {
        handleError(res, 'Error searching metals:', error);
    }
};

// Exports
module.exports = {
    fetchMetalsHandler,
    registerMetalHandler,
    editMetalHandler,
    getMetalHandler,
    deleteMetalHandler,
    searchMetalHandler
};
