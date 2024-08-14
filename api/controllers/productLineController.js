const { ProductLine } = require('../models');

/**
 * Registers new entry in db
 * @param {*} params - Data to be regitered
 * @returns New registered entry
 */
const registerProductLine = async (params) => {
    return await ProductLine.create(params);
}

module.exports = {
    registerProductLine
}