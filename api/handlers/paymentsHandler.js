const {
    listPayments,
    registerPayment,
    editPayment,
    cancelPayment,
    getPaymentByPk,
    searchPayments
} = require('../controllers');

// Helper function to send error responses
const handleError = (res, message, error) => {
    console.error(`${message}:`, error.message);
    res.status(500).json({ error: message, message: error.message });
};

// Helper function to send successful responses
const handleSuccess = (res, data, status = 200) => {
    res.status(status).json(data);
};

/**
 * Handles logic to list payments.
 */
const listPaymentsHandler = async (req, res) => {
    try {
        const payments = await listPayments();
        handleSuccess(res, payments);
    } catch (error) {
        handleError(res, 'Error listing payments', error);
    }
};

/**
 * Handles logic to register a payment.
 */
const registerPaymentHandler = async (req, res) => {
    try {
        const payment = await registerPayment(req.body);
        handleSuccess(res, payment, 201);
    } catch (error) {
        handleError(res, 'Error registering payment', error);
    }
};

/**
 * Handles logic to edit a payment instance.
 */
const editPaymentHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await editPayment(id, req.body);
        handleSuccess(res, { success: updated === 1 }, 202);
    } catch (error) {
        handleError(res, 'Error editing payment', error);
    }
};

/**
 * Handles logic to cancel a payment.
 */
const cancelPaymentHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const canceled = await cancelPayment(id);
        handleSuccess(res, { success: canceled === 1 });
    } catch (error) {
        handleError(res, 'Error canceling payment', error);
    }
};

/**
 * Handles logic to get payment details by primary key (PK).
 */
const detailsPaymentHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const details = await getPaymentByPk(id);
        handleSuccess(res, details);
    } catch (error) {
        handleError(res, 'Error finding payment details', error);
    }
};

/**
 * Handles logic to search for payments by a search parameter.
 */
const searchPaymentHandler = async (req, res) => {
    try {
        const { client } = req.body;
        const payments = await searchPayments(client);
        handleSuccess(res, payments);
    } catch (error) {
        handleError(res, 'Error searching payments', error);
    }
};

module.exports = {
    listPaymentsHandler,
    registerPaymentHandler,
    editPaymentHandler,
    detailsPaymentHandler,
    cancelPaymentHandler,
    searchPaymentHandler
};
