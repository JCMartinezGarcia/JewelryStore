const express = require('express');
const router = express.Router();

const {
    listSalesHandler,
    registerSaleHandler,
    editSaleHandler,
    findSaleHandler,
    searchSalesHandler,
    cancelSaleHandler
} = require('../handlers');


router.get('/list', listSalesHandler);
router.post('/register', registerSaleHandler);
router.put('/edit/:id', editSaleHandler);
router.get('/find/:id', findSaleHandler);
router.post('/search', searchSalesHandler);
router.delete('/cancel/:id', cancelSaleHandler);

module.exports = router;