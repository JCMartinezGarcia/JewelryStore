//required modules
var express = require('express');
var router = express.Router();

const {
    registerUserProfileHandler,
    editUserProfileHandler,
    deleteUserProfileHandler,
    getUserProfileHandler
} = require('../handlers');

//user Routes

router.post('/register', registerUserProfileHandler);
router.get('/get/:id', getUserProfileHandler);
router.put('/edit/:id', editUserProfileHandler);
router.delete('/delete/:id', deleteUserProfileHandler);

//export handlers
module.exports = router;
