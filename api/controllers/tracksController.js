var Track = require('../models/Track');

// GET
function tracksIndex(request, response) {
  Track.find(function(error, tracks) {
    if(error) response.status(404).send(error);

    response.status(200).send(tracks);
  }).select('-__v');
}

// POST
function tracksCreate(request, response) {
  var track = new Track(request.body);

  track.save(function(error) {
    if(error) response.status(500).send(error);

    response.status(201).send(track);
  });
}

// GET
function tracksShow(request, response) {
  var id = request.params.id;

  Track.findById({_id: id}, function(error, track) {
    if(error) response.status(404).send(error);

    response.status(200).send(track);
  }).select('-__v');
}

module.exports = {
  index: tracksIndex,
  create: tracksCreate,
  show: tracksShow
}
