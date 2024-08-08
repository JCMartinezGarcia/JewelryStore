//required modules
const express = require('express');
const router = express.Router();

const {
    registerCaratHandler,
} = require('../handlers');

//carat routes

router.post('/register', registerCaratHandler);

//export modules
module.exports = router;