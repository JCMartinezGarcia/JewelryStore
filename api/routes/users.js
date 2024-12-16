var express = require('express');
var router = express.Router();

const {
    listUserHandler,
    registerUserHandler,
    editUserHandler,
    deleteUserHandler,
    verifyEmailHandler
} = require('../handlers');

router.get('/list', listUserHandler);
router.post('/register', registerUserHandler);
router.put('/edit/:id', editUserHandler);
router.delete('/delete/:id', deleteUserHandler);
router.post('/validate-email', verifyEmailHandler);

module.exports = router;
