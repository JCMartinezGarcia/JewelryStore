//required modules
const express = require('express');
const router = express.Router();

const {
    listProductLinesHandler,
    registerProductLineHandler,
    editProductLineHandler,
    findProductLineHandler,
    deleteProductLineHandler,
    searchProductLineHandler
} = require('../handlers');

//Productline Routes

router.get('/list', listProductLinesHandler);
router.post('/register', registerProductLineHandler);
router.put('/update/:id', editProductLineHandler);
router.get('/fetchbyid/:id', findProductLineHandler);
router.delete('/delete/:id', deleteProductLineHandler);
router.post('/search', searchProductLineHandler);

//export module
module.exports = router;