const {
    listUsers,
    registerUser,
    updateUser,
    deleteUser,
    verifyEmail,
    getUserById,
    searchUsers
} = require('../controllers');

const { generateRandomPassword } = require('./Utils/users');

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
 * handle users registration
 */
const registerUserHandler = async (req, res) => {
    const saltRounds = 10;
    try {
        const { email } = req.body;
        //Generate random password and hash it
        const password = generateRandomPassword(4);
        const hashedPass = await bcrypt.hash(password, saltRounds);
        //Register user
        const user = await registerUser(email, hashedPass);

        res.status(201).json({
            message: 'User registered successfully',
            user,
        });

    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
}

/**
 * Handles user update
 */
const updateUserHandler = async (req, res) => {
    try {
        const { email } = req.body;
        const { id } = req.params;

        const updated = await updateUser(email, id);
        res.status(202).json(updated);
    } catch (error) {
        console.error('Error updating user:', error.message);
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
}

/**
 * Handles user delete
 */
const deleteUserHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUser(id);

        res.status(200).json(deletedUser);
    } catch (error) {
        console.error('Error deleting user:', error.message);
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

/**
 * Handles user details retrieval
 */
const getUserByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const userDetails = await getUserById(id);
        res.status(200).json(userDetails);
    } catch (error) {
        console.error('Error fetching user:', error.message);
        res.status(500).json({ message: 'Error finding user', error });
    }
}

/**
 * Handle search for users
 */
const searchUsersHandler = async (req, res) => {

    const { searchString } = req.body;
    try {
        const users = await searchUsers(searchString);
        res.status(200).json(users);
    } catch (error) {
        console.error('Error searching for users', error.message);
        res.status(500).json({ message: 'Error searching users', error: error.message });
    }
}

//exports
module.exports = {
    listUsersHandler,
    registerUserHandler,
    updateUserHandler,
    deleteUserHandler,
    verifyEmailHandler,
    getUserByIdHandler,
    searchUsersHandler
}