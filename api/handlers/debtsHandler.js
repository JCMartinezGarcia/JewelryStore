const {
    listDebts,
    registerDebt,
    editDebt,
    deleteDebt,
    findDebtDetails,
    searchDebts
} = require('../controllers');

const handleError = (res, message, error) => {
    console.error(`${message}:`, error.message);
    res.status(500).json({ error: message, message: error.message });
};

/**
 * Handles logic to list debts.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends a list of debts in JSON format.
 */const listDebtsHandler = async (req, res) => {
    try {
        const carats = await listDebts();
        res.status(200).json(carats);
    } catch (error) {
        handleError(res, 'Error listing debts', error);
    }
};

/**
 * Handles logic to register s debt.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the newly created debt instance in JSON format.
 */const registerDebtHandler = async (req, res) => {
    try {
        const debt = await registerDebt(req.body);
        res.status(201).json(debt);
    } catch (error) {
        handleError(res, 'Error registering debt', error);
    }
};

/**
 * Handles logic to edit a debt instance.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the result of the update operation.
 */const editDebtHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await editDebt(id, req.body);
        res.status(202).json({ success: updated === 1 });
    } catch (error) {
        handleError(res, 'Error editing debt', error);
    }
};

/**
 * Handles logic to delete an instance.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the result of the delete operation.
 */
const deleteDebtHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteDebt(id);
        res.status(200).json({ success: deleted === 1 });
    } catch (error) {
        handleError(res, 'Error deleting debt', error);
    }
};

/**
 * Handles logic to find debt details by its primary key (PK).
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the found details instance.
 */
const detailsDebtHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const details = await findDebtDetails(id);
        res.status(200).json(details);
    } catch (error) {
        handleError(res, 'Error finding debt details', error);
    }
};

/**
 * Handles logic to search for debts matching a search parameter.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends a list of debts matching the search parameter.
 */const searchDebtsHandler = async (req, res) => {
    try {
        const { idClient } = req.body;
        const debts = await searchDebts(idClient);
        res.status(200).json(debts);
    } catch (error) {
        handleError(res, 'Error searching debts', error);
    }
};

module.exports = {
    listDebtsHandler,
    registerDebtHandler,
    editDebtHandler,
    detailsDebtHandler,
    deleteDebtHandler,
    searchDebtsHandler
};
