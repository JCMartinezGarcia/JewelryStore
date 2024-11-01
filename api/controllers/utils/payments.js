const { where } = require('sequelize');
const { Debt } = require('../../models');

/**
 * Updates the related debt to the payment done
 * @param {Number} idDebt - DEBT ID
 * @param {Number} amount - Amount of payment
 */
const updateDebt = async (idDebt, amount) => {
    const debt = await Debt.findByPk(idDebt);
    const amountPayed = amount + Number(debt.amountPayed);
    const amountPending = Number(debt.amount) - amountPayed;
    const isActive = (amountPending == 0) ? false : true;
    const [updated] = await Debt.update(
        {
            amountPayed,
            amountPending,
            isActive
        },
        {
            where: { id: idDebt }
        });
    if (!updated) {
        throw new Error('Debt could not be updated');
    }
}

/**
 * Reverts payment done to a existing debt
 * @param {Number} idDebt - Debt ID
 * @param {Number} amount - Amount to be reverted
 */
const revertDebtPay = async (idDebt, amount) => {
    const debt = await Debt.findByPk(idDebt);
    const revertedAmountPayed = Number(debt.amountPayed) - amount;
    const revertedAmountPending = Number(debt.amount) - revertedAmountPayed;
    const revertedIsActive = (revertedAmountPending > 0) ? true : false;

    const [updated] = await Debt.update(
        {
            amountPayed: revertedAmountPayed,
            amountPending: revertedAmountPending,
            isActive: revertedIsActive
        }, { where: { id: idDebt } });

    if (!updated) {
        throw new Error('Revert debt payment failed');
    }
}

module.exports = {
    updateDebt,
    revertDebtPay
}