var express = require('express');
var router = express.Router();

const {
    registerMetalHandler,
    fetchMetalsHandler,
    editMetalHandler,
    getMetalHandler,
    deleteMetalHandler,
    searchMetalHandler
} = require('../handlers');

router.get('/fetch', fetchMetalsHandler);
router.post('/register', registerMetalHandler);
router.put('/update/:id', editMetalHandler);
router.get('/fetch/:id', getMetalHandler);
router.delete('/delete/:id', deleteMetalHandler);
router.post('/search', searchMetalHandler);

module.exports = router;

