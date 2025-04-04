const {
    listUsers,
    registerUser,
    editUser,
    deleteUser,
    verifyEmail,
    findUser,
    searchUsers
} = require('../controllers');

const { randomPassword } = require('./Utils/users');

const bcrypt = require('bcrypt');

/**
 * Handles retrieving the list of all users
 */
const listUsersHandler = async (req, res) => {
    try {
        const users = await listUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error listing users:', error.message);
        res.status(500).json({ message: 'Error listing users', error: error.message });
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
        const { email } = req.body;
        const password = randomPassword(4);
        const hashedPass = await bcrypt.hash(password, saltRounds);
        const user = await registerUser(email, hashedPass);
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
        const { email } = req.body;
        const { id } = req.params;
        const user = await editUser(email, id);
        res.status(202).json(user);
    } catch (error) {
        console.log('Error editing user:', error.message);
        res.status(500).json({ message: 'Error editing user', error: error.message });
    }
}

/**
 * Handles login to delete an user
 * @param {*} req 
 * @param {*} res 
 */
const deleteUserHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await deleteUser(id);
        res.status(200).json(user);
    } catch (error) {
        console.log('Error deleting user:', error.message);
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
}

const verifyEmailHandler = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        res.status(200).json({ isAvailable: !await verifyEmail(email) });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}


const findUserHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await findUser(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

const searchUsersHandler = async (req, res) => {

    const { searchString } = req.body;
    try {
        const users = await searchUsers(searchString);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error searching users', error });
    }
}

//exports
module.exports = {
    listUsersHandler,
    registerUserHandler,
    editUserHandler,
    deleteUserHandler,
    verifyEmailHandler,
    findUserHandler,
    searchUsersHandler
}