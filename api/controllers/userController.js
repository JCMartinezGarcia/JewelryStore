//import models
const { User, ProfileUser } = require('../models/index');
//controller Functions
const registerUser = async (email, password) => {
    try {
        // register a new user
        const usr = await User.create({ email: email, password: password });
        // return created user
        return usr;
    } catch (error) {
        //handle errors
        console.log('Error registering user:', error.message);
        throw error;
    }
}
//exports
module.exports = {
    registerUser
}