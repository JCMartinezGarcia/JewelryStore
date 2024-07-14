//import controllers 
const { registerUser } = require('../controllers');

//handler functions 

/**
 * returns all users 
 * @param {*} req 
 * @param {*} res 
 */
const registerUserHandler = async (req, res) => {
    try {
        //destructure request data
        const { email, password } = req.body;
        //call register controller function
        const user = await registerUser(email, password);
        //return response
        res.status(201).json(user);
    } catch (error) {
        //handle errors
        console.log('Error registering user:', error.message);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
}
//exports
module.exports = {
    registerUserHandler
}