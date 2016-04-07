var User = require('../models/User');

// GET
function usersIndex(request, response) {
  User.find(function(error, users) {
    if(error) response.status(404).json(error);

    response.status(200).json(users);
  }).select('-__v');
}

// POST
function usersCreate(request, response) {
  var user = new User(request.body);
  user.save(function(error) {
    if(error) response.status(500).json(error);
    response.status(201).json(user);
  });
}

// PUT
function usersUpdate(request, response) {
  User.findById(request.params.id, function(err, user) {
    if(err) response.status(500).json(err);

    user.username = request.body.username;
    user.tracks = request.body.tracks;
    user.likes = request.body.likes;
    user.website = request.body.website;
    user.picture = request.body.picture;
    user.soundcloudId = request.body.soundcloudId;

    user.save(function(err, user) {
      if(err) response.status(500).json(err);
      response.status(200).json(user);
    });
  });
}

// GET
function usersShow(request, response) {
  var id = request.params.id;

  User.findById({_id: id}, function(error, user) {
    if(error) response.status(404).json(error);

    response.status(200).json(user);
  }).select('-__v');
}

module.exports = {
  index: usersIndex,
  create: usersCreate,
  update: usersUpdate,
  show: usersShow
}
