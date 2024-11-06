const { SaleDetail } = require('../models');


/**
 * Retrieves sale details 
 * @returns {Promise<Array>} Details list
 */
const listSaleDetail = (id) => {
    return SaleDetail.findAll({ where: { idSale: id } });
}

/**
 * Registers sales details in the database.
 * @param {Object} details - Details data to be registered.
 * @returns {Promise<Object>} - Created details instance.
 */
const registerSaleDetails = (details) => {
    return SaleDetail.bulkCreate(details, {
        validate: true,
        fields: ['idSale', 'idProduct', 'quantity', 'amount']
    });
}

/**
 * Updates an existig sale details
 * @param {Number} id - Sale ID
 * @param {Array} params - Sale detail attributes to be updated
 * @returns Number of affected rows (1 if succeeded, 0 if failed).
 */

const editSaleDetail = async (id, details) => {
    // for (let index = 0; index < details.length; index++) {
    //     const [updated] = await SaleDetail.update(details[index], { where: { idSale: id } });
    //     if (!updated) {
    //         throw new Error('Update operation did not succeed on row: ' + index);
    //     }
    // }
    // return updated;
}

// /**
//  * Retrieves a single sale instance by its primary key (PK).
//  * @param {number} id - Sale ID.
//  * @returns {Promise<Object|null>} - Found sale instance or null if not found.
//  */
// const findSaleByPk = (id) => {
//     return Sale.findByPk(id);
// }

// /**
//  * Searches for sale matching a given search parameter.
//  * @param {string} folio - Search parameter.
//  * @returns {Promise<Array>} - List of sales matching the search parameter.
//  */
// const searchSales = (folio) => {
//     return Sale.findAll({ where: { folio } });
// }

// /**
//  * Cancels an existing sale.
//  * @param {number} id - Sale ID.
//  * @returns {Promise<number>} - Number of affected rows (1 if succeeded, 0 if failed).
//  */
// const cancelSale = async (id) => {
//     const [canceled] = await Sale.update({ isCancel: true }, { where: { id } });
//     return canceled;
// }

module.exports = {
    listSaleDetail,
    registerSaleDetails,
    editSaleDetail
}