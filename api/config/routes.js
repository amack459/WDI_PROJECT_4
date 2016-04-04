var router = require('express').Router();
var authController = require('../controllers/authentication');
var userController = require('../controllers/usersController');

router.post('/auth/soundcloud', authController.soundcloud);

router.get('/', userController.index);

module.exports = router;
