//required modules
var express = require('express');
var router = express.Router();

//routers 
const userRouter = require('./users');
const userProfileRouter = require('./userprofile');
//paths 
router.use('/api/users', userRouter);
router.use('/api/users/profile', userProfileRouter);

//Export module 
module.exports = router;
