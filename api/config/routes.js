var router = require('express').Router();
var authController = require('../controllers/authentication');

router.post('/auth/soundcloud', authController.soundcloud);

module.exports = router;
