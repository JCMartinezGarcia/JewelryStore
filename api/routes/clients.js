//required modules
var express = require('express');
var router = express.Router();

const {
    listClientsHandler,
    getClientHandler,
    registerClientHandler,
    editClientHandler,
    deleteClientHandler,
    searchClientsHandler
} = require('../handlers');

//client routes
router.get('/list', listClientsHandler);
router.get('/find/:id', getClientHandler);
router.post('/register', registerClientHandler);
router.put('/edit/:id', editClientHandler);
router.delete('/delete/:id', deleteClientHandler);
router.post('/search', searchClientsHandler);

//exports
module.exports = router;

