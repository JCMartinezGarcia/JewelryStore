//required modules
const { where, Op } = require('sequelize');
const { Metal } = require('../models/index');

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

/**
 * edits metal instance info
 * @param {*} metalParams - metal attributes to be updated
 * @param {*} id - metal id
 * @returns - returns 1 if it succeeded 0 if it failed
 */

const editMetal = async (metalParams, id) => {
    //update metal instance
    const metal = Metal.update(
        metalParams,
        {
            where: {
                id
            }
        }
    );
    //returns 1 if it succeeded 0 if it failed
    return metal;
}

/**
 * obtains metal instance by id
 * @param {*} id - metal id
 * @returns - metal instance by id
 */

const getMetalByPk = async (id) => {
    //obtains metal by id
    const metal = await Metal.findByPk(id);
    //returns metal instance
    return metal;
}

/**
 * deletes a metal instance 
 * @param {*} id - metal id
 * @returns - returns 1 if it succeeded 0 if it falied
 */
const deleteMetal = async (id) => {
    //deletes metal instance 
    const metal = Metal.destroy({ where: { id } });
    //returns 1 if it succeeded 0 if it falied
    return metal;
}

/**
 * search for metals matching the string parameter
 * @param {*} searchParameter - search string parameter
 * @returns - list of metals 
 */

const searchMetals = async (searchParameter) => {
    //obtain metals matching search parameter
    const metals = await Metal.findAll({
        where: {
            metal: searchParameter
        }
    });
    //return list of metals
    return metals;
}

//exports
module.exports = {
    listMetals,
    registerMetal,
    editMetal,
    getMetalByPk,
    deleteMetal,
    searchMetals
}