var express = require('express');
var router = express.Router();

const {
    listUsersHandler,
    findUserHandler,
    registerUserHandler,
    editUserHandler,
    deleteUserHandler,
    verifyEmailHandler,
    searchUsersHandler
} = require('../handlers');

router.get('/list', listUsersHandler);
router.get('/details/:id', findUserHandler);
router.post('/register', registerUserHandler);
router.put('/edit/:id', editUserHandler);
router.delete('/delete/:id', deleteUserHandler);
router.post('/validate-email', verifyEmailHandler);
router.post('/search', searchUsersHandler);

module.exports = router;
