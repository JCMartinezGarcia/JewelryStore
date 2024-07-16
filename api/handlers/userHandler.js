//import controllers 
const { listUsers, registerUser, editUser } = require('../controllers');

//handler functions 
/**
 * returns list of all users
 * @param {*} req 
 * @param {*} res 
 */
const listUserHandler = async (req, res) => {
    try {
        //call list users controller function
        const users = await listUsers();
        //return response
        res.status(200).json(users);
    } catch (error) {
        //handle errors
        console.log('Error listing users:', error.message);
        res.status(500).json({ message: 'Error listing users:', error: error.message });
    }
}

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

/**
 * edits an user 
 * @param {*} req 
 * @param {*} res 
 */
const editUserHandler = async (req, res) => {
    try {
        //destructure request data
        const { email, password } = req.body;
        const { id } = req.params;
        //call edit user controller function
        const user = await editUser(email, password, id);
        //return response
        res.status(200).json(user);
    } catch (error) {
        //handle errors
        console.log('Error editing user:', error.message);
        res.status(500).json({ message: 'Error editing user:', error: error.message });
    }
}
//exports
module.exports = {
    listUserHandler,
    registerUserHandler,
    editUserHandler
}