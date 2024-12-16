var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './public/images/' });

const {
    registerUserProfileHandler,
    editUserProfileHandler,
    deleteUserProfileHandler,
    getUserProfileHandler,
} = require('../handlers');


router.post('/register', upload.single('profile_image'), registerUserProfileHandler);
router.get('/get/:id', getUserProfileHandler);
router.put('/edit/:id', upload.single('profile_image'), editUserProfileHandler);
router.delete('/delete/:id', deleteUserProfileHandler);

module.exports = router;
