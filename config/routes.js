var router = require('express').Router();
var usersController = require('../controllers/usersController');
var authController = require('../controllers/authentication');

router.post('/auth/soundcloud', authController.soundcloud);

router.get('/', function(req, res) {
  res.sendFile('../public/index.html');
});

// http://127.0.0.1:3000/users
router.route('/users')

  //GET all users
  .get(usersController.index)

  //POST a new user
  .post(usersController.create);

router.route('/users/:id')

  // GET return specific user
  .get(usersController.show)

  // PUT update existing users
  .put(usersController.update);

  // DELETE remove specific users from DB
  // .delete(usersController.delete);

module.exports = router;
