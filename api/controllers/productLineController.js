const { where } = require('sequelize');
const { ProductLine } = require('../models');

/**
 * Registers new entry in db
 * @param {*} params - Data to be regitered
 * @returns New registered entry
 */
const registerProductLine = async (params) => {
    return await ProductLine.create(params);
}

/**
 * Obtains all entrys form db
 * @returns {Promise<Array>} Array of objects
 */
const listProductLines = async () => {
    return await ProductLine.findAll();
}

/**
 * Edits an entry 
 * @param {*} params - Data to be updated 
 * @param {*} id - Entry id 
 * @returns {Promise<number>} 1 if succeeded, 0 if failed
 */
const editProductLine = async (params, id) => {
    return await ProductLine.update(params, { where: { id } });
}

/**
 * Obtains an entry by pk
 * @param {*} id - Entry id
 * @returns {Promise<Object>} Found entry 
 */
const findProductLineByPk = async (id) => {
    return await ProductLine.findByPk(id);
}

module.exports = {
    listProductLines,
    registerProductLine,
    editProductLine,
    findProductLineByPk
}