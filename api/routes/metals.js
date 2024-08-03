//required modules
var express = require('express');
var router = express.Router();

const {
    registerMetalHandler,
    listMetalsHandler,
} = require('../handlers');

//metals routes
router.get('/list', listMetalsHandler);
router.post('/register', registerMetalHandler);

//exports
module.exports = router;

