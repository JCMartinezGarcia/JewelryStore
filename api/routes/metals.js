//required modules
var express = require('express');
var router = express.Router();

const {
    registerMetalHandler,
    listMetalsHandler,
    editMetalHandler,
    getMetalHandler,
    deleteMetalHandler,
    searchMetalHandler
} = require('../handlers');

//metals routes
router.get('/list', listMetalsHandler);
router.post('/register', registerMetalHandler);
router.put('/edit/:id', editMetalHandler);
router.get('/find/:id', getMetalHandler);
router.delete('/delete/:id', deleteMetalHandler);
router.post('/search', searchMetalHandler);

//exports
module.exports = router;

