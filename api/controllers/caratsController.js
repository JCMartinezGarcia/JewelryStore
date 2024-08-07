//required modules
const { Carat } = require('../models');

//controller functions

/**
 * registers carat instance in db
 * @param {*} caratParams - carat data to be registered
 * @returns - created carat instance
 */

const registerCarat = async (caratParams) => {
    //register carat in db
    const carat = Carat.create(caratParams);
    //returns regitered carat instance
    return carat;
}

module.exports = {
    registerCarat
}