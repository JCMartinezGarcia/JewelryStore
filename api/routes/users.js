var express = require('express');
var router = express.Router();

const {
    listUserHandler,
    findUserHandler,
    registerUserHandler,
    editUserHandler,
    deleteUserHandler,
    verifyEmailHandler
} = require('../handlers');

router.get('/list', listUserHandler);
router.get('/details/:id', findUserHandler);
router.post('/register', registerUserHandler);
router.put('/edit/:id', editUserHandler);
router.delete('/delete/:id', deleteUserHandler);
router.post('/validate-email', verifyEmailHandler);

module.exports = router;
