//required modules
const { Metal } = require('../models/index');
const { Op, where } = require('sequelize');

//controller functions

/**
 * get list of all metals in db
 * @returns - list of metals
 */

const listMetals = async () => {
    //get list of all metals
    const metals = await Metal.findAll();
    //return list of metals
    return metals;
}

/**
 * registers a new metal in DB
 * @param {*} metalParams - object with metal data
 * @returns - created metal instance
 */
const registerMetal = async (metalParams) => {
    // register a new metal
    const metal = await Metal.create(metalParams);
    // return created metal
    return metal;
}

//exports
module.exports = {
    listMetals,
    registerMetal,
}