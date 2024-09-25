//required modules
const express = require('express');
const router = express.Router();

const {
    listSaleDetailsHandler,
    registerSaleDetailsHandler,
    editSaleDetailsHandler
} = require('../handlers');


router.get('/list/:id', listSaleDetailsHandler);
router.post('/register', registerSaleDetailsHandler);
router.put('/edit/:id', editSaleDetailsHandler);
// router.get('/find/:id', findSaleHandler);
// router.post('/search', searchSalesHandler);
// router.delete('/cancel/:id', cancelSaleHandler);

module.exports = router;