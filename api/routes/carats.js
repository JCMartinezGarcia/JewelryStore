//required modules
const express = require('express');
const router = express.Router();

const {
    registerCaratHandler,
    editCaratHandler,
    listCaratsHandler
} = require('../handlers');

//carat routes

router.get('/list', listCaratsHandler);
router.post('/register', registerCaratHandler);
router.put('/edit/:id', editCaratHandler);

//export modules
module.exports = router;