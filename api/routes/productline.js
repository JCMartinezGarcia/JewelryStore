//required modules
const express = require('express');
const router = express.Router();

const {
    listProductLinesHandler,
    registerProductLineHandler,
    editProductLineHandler,
    findProductLineHandler
} = require('../handlers');

//Productline Routes

router.get('/list', listProductLinesHandler);
router.post('/register', registerProductLineHandler);
router.put('/edit/:id', editProductLineHandler);
router.get('/find/:id', findProductLineHandler);

//export module
module.exports = router;