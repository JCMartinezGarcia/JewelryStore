const { Payment } = require('../models');
const { updateDebt, revertDebtPay } = require('./utils');

/**
 * Retrieves a list of all payments in the database.
 * @returns {Promise<Array>} - List of payments.
 */
const listPayments = () => Payment.findAll();

/**
 * Registers a new payment instance in the database.
 * @param {Object} data - Payment data to be registered.
 * @returns {Promise<Object>} - Created payment instance.
 */
const registerPayment = async (data) => {
    const { idDebt, amount } = data;
    // Update the debt before creating the payment
    await updateDebt(idDebt, amount);
    return await Payment.create(data);
};

/**
 * Updates an existing payment instance.
 * @param {number} id - Payment ID.
 * @param {Object} params - Payment attributes to be updated.
 * @returns {Promise<number>} - Number of affected rows (1 if succeeded, 0 if failed).
 */
const editPayment = async (id, params) => {
    const { amount } = params;

    const prevPay = await Payment.findByPk(id);
    if (!prevPay) throw new Error('Payment not found');
    // Revert the previous debt update and apply the new amount
    await revertDebtPay(prevPay.idDebt, prevPay.amount);
    await updateDebt(prevPay.idDebt, amount);
    const [updated] = await Payment.update({ amount }, { where: { id } });
    return updated;
};

/**
 * Cancels a payment instance from the database.
 * @param {number} id - Payment ID.
 * @returns {Promise<number>} - Number of affected rows (1 if succeeded, 0 if failed).
 */
const cancelPayment = async (id) => {
    const pay = await Payment.findByPk(id);
    if (!pay) throw new Error('Payment not found');
    // Revert the debt associated with the canceled payment
    await revertDebtPay(pay.idDebt, pay.amount);
    const [updated] = await Payment.update({ isCanceled: true }, { where: { id } });
    return updated;
};

/**
 * Retrieves a single payment instance by its primary key (PK).
 * @param {number} id - Payment ID.
 * @returns {Promise<Object|null>} - Found instance or null if not found.
 */
const getPaymentByPk = (id) => Payment.findByPk(id);

/**
 * Searches for payments matching a given search parameter.
 * @param {string} client - Search parameter (Client ID).
 * @returns {Promise<Array>} - List of payments matching the search parameter.
 */
const searchPayments = (client) => Payment.searchPayments(client);

module.exports = {
    listPayments,
    registerPayment,
    editPayment,
    cancelPayment,
    getPaymentByPk,
    searchPayments
};
