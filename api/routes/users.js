var express = require('express');
var router = express.Router();
//import Handlers
const {
    listUserHandler,
    registerUserHandler,
    editUserHandler,
} = require('../handlers');
//user Routes
router.get('/list', listUserHandler);
router.post('/register', registerUserHandler);
router.put('/edit/:id', editUserHandler);
//export handlers
module.exports = router;
