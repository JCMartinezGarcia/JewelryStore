//import controllers 
const {
    listUsers,
    registerUser,
    editUser,
    deleteUser
} = require('../controllers');

//required modules
const bcrypt = require('bcrypt');

//handler functions 
/**
 * handle login to return list of all users
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
 * handle logic to register an user
 * @param {*} req 
 * @param {*} res 
 */
const registerUserHandler = async (req, res) => {
    const saltRounds = 10;
    try {
        //destructure request data
        const { email, password } = req.body;
        //hash password
        const hashedPass = await bcrypt.hash(password, saltRounds);
        //call register controller function
        const user = await registerUser(email, hashedPass);
        //return response
        res.status(201).json(user);
    } catch (error) {
        //handle errors
        console.log('Error registering user:', error.message);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
}

/**
 * handle logic to edit an user 
 * @param {*} req 
 * @param {*} res 
 */
const editUserHandler = async (req, res) => {
    try {
        //destructure request data
        const { email } = req.body;
        const { id } = req.params;
        //call edit user controller function
        const user = await editUser(email, id);
        //return response
        res.status(200).json(user);
    } catch (error) {
        //handle errors
        console.log('Error editing user:', error.message);
        res.status(500).json({ message: 'Error editing user:', error: error.message });
    }
}

/**
 * handle login to delete an user
 * @param {*} req 
 * @param {*} res 
 */
const deleteUserHandler = async (req, res) => {
    try {
        //destructure data
        const { id } = req.params;
        //call delete user controller function
        const user = await deleteUser(id);
        //return deleted user
        res.status(200).json(user);
    } catch (error) {
        //handle errors
        console.log('Error deleting user:', error.message);
        res.status(500).json({ message: 'Error deleting user:', error: error.message });
    }
}

//exports
module.exports = {
    listUserHandler,
    registerUserHandler,
    editUserHandler,
    deleteUserHandler
}