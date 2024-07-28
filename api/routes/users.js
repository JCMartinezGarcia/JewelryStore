//required modules
var express = require('express');
var router = express.Router();

const {
    listUserHandler,
    registerUserHandler,
    editUserHandler,
    deleteUserHandler
} = require('../handlers');

//user Routes
router.get('/list', listUserHandler);
router.post('/register', registerUserHandler);
router.put('/edit/:id', editUserHandler);
router.delete('/delete/:id', deleteUserHandler);

//export handlers
module.exports = router;
