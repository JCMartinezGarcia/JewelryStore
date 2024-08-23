const express = require('express');
const router = express.Router();

const {
    registerProductHandler
} = require('../handlers');

router.post('/register', registerProductHandler);

module.exports = router;