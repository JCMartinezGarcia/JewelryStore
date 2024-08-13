//required modules
const express = require('express');
const router = express.Router();

const {
    registerProductLineHandler
} = require('../handlers');

//Productline Routes

router.post('/register', registerProductLineHandler);

//export module
module.exports = router;