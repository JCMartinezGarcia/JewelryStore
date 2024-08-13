//required modules
const express = require('express');
const router = express.Router();

const {
    registerCaratHandler,
    editCaratHandler,
    listCaratsHandler,
    deleteCaratHandler,
    findCaratHandler,
    searchCaratsHandler
} = require('../handlers');

//carat routes

router.get('/list', listCaratsHandler);
router.post('/register', registerCaratHandler);
router.put('/edit/:id', editCaratHandler);
router.delete('/delete/:id', deleteCaratHandler);
router.get('/find/:id', findCaratHandler);
router.post('/search', searchCaratsHandler);

//export modules
module.exports = router;