/**import controllers */
const {
    listUsers,
    registerUser,
    editUser,
} = require('./userController');

//exports
module.exports = {
    listUsers,
    registerUser,
    editUser
}