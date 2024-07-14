var express = require('express');
var router = express.Router();
//import Handlers
const { registerUserHandler } = require('../handlers');
//user Routes
router.post('/register', registerUserHandler);
//export handlers
module.exports = router;
