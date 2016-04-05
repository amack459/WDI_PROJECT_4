var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  username: String,
  tracks: [{  title: String,
    id: String,
    genre: String,
    artwork_url: String,
    duration: String }],
  matches: [],
  likes: [],
  website: String,
  picture: String,
  swiped: Boolean,
  soundcloudId: String
});

module.exports = mongoose.model('User', userSchema);
