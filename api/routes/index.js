//required modules
var express = require('express');
var router = express.Router();

//routers 
const userRouter = require('./users');
const userProfileRouter = require('./userprofile');
const clientsRouter = require('./clients');
const metalsRouter = require('./metals');
const caratsRouter = require('./carats');
const productLineRouter = require('./productline');
const productsRouter = require('./products');
const salesRouter = require('./sales');
const saleDetailsRouter = require('./salesDetails');
const debtsRouter = require('./debts');
const paymentsRouter = require('./payments');

//paths 
router.use('/api/users', userRouter);
router.use('/api/users/profile', userProfileRouter);
router.use('/api/clients', clientsRouter);
router.use('/api/metals', metalsRouter);
router.use('/api/carats', caratsRouter);
router.use('/api/products/lines', productLineRouter);
router.use('/api/products', productsRouter);
router.use('/api/sales', salesRouter);
router.use('/api/sales/details', saleDetailsRouter);
router.use('/api/debts', debtsRouter);
router.use('/api/payments', paymentsRouter);

//Export module 
module.exports = router;
