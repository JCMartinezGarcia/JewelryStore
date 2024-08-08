//required modules
const {
    registerCarat,
} = require('../controllers');

//handler functions

/**
 * handles logic to register a new carat
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns - new created carat instance
 */

const registerCaratHandler = async (req, res) => {
    try {
        //carat data 
        const caratData = req.body;
        //call register carat function
        const carat = await registerCarat(caratData);
        //return created instance in json format
        return res.status(201).json(carat);
    } catch (error) {
        //handle errors
        console.error('Error registering carat');
        res.status(500).json({ error: 'Error registering carat', message: error.message });
    }
}

//exports 
module.exports = {
    registerCaratHandler
}