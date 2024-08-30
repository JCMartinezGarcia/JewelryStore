const express = require('express');
const router = express.Router();

const {
    listProductsHandler,
    registerProductHandler,
    editProductHandler,
    deleteProductHandler,
    findProductHandler,
    searchProductsHandler
} = require('../handlers');

router.post('/register', registerProductHandler);
router.get('/list', listProductsHandler);
router.put('/edit/:id', editProductHandler);
router.delete('/delete/:id', deleteProductHandler);
router.get('/find/:id', findProductHandler);
router.post('/search', searchProductsHandler);

module.exports = router;