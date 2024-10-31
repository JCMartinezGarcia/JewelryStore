const express = require('express');
const router = express.Router();


const {
    listPaymentsHandler,
    registerPaymentHandler,
    editPaymentHandler,
    detailsPaymentHandler,
    cancelPaymentHandler,
    searchPaymentHandler
} = require('../handlers');


router.get('/list', listPaymentsHandler);
router.post('/register', registerPaymentHandler);
router.put('/edit/:id', editPaymentHandler);
router.get('/details/:id', detailsPaymentHandler);
router.delete('/cancel/:id', cancelPaymentHandler);
router.post('/search', searchPaymentHandler);

module.exports = router;