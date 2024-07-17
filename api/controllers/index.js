/**import controllers */
const {
    listUsers,
    registerUser,
    editUser,
    deleteUser
} = require('./userController');

//exports
module.exports = {
    listUsers,
    registerUser,
    editUser,
    deleteUser
}