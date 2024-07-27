//required modules
var express = require('express');
var router = express.Router();

const {
    registerClientHandler
} = require('../handlers');

//client routes
router.post('/register', registerClientHandler);

//exports
module.exports = router;

