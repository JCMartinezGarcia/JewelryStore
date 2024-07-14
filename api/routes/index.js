var express = require('express');
var router = express.Router();

//routers 
const userRouter = require('./users');
//paths 
router.use('/api/users', userRouter);
/**Export module */
module.exports = router;
