const express = require('express');
const router = express.Router();

const {
    listDebtsHandler,
    registerDebtHandler,
    editDebtHandler,
    detailsDebtHandler,
    deleteDebtHandler,
    searchDebtsHandler
} = require('../handlers');

router.get('/list', listDebtsHandler);
router.post('/register', registerDebtHandler);
router.put('/edit/:id', editDebtHandler);
router.get('/details/:id', detailsDebtHandler);
router.delete('/delete/:id', deleteDebtHandler);
router.post('/search', searchDebtsHandler);


module.exports = router;