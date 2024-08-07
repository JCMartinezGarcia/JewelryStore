//required modules
var express = require('express');
var router = express.Router();

//routers 
const userRouter = require('./users');
const userProfileRouter = require('./userprofile');
const clientsRouter = require('./clients');
const metalsRouter = require('./metals');
const caratsRouter = require('./carats');

//paths 
router.use('/api/users', userRouter);
router.use('/api/users/profile', userProfileRouter);
router.use('/api/clients', clientsRouter);
router.use('/api/metals', metalsRouter);
router.use('/api/carats', caratsRouter);

//Export module 
module.exports = router;
