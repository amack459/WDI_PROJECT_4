var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  username: String,
  tracks: [],
  matches: [],
  likes: [{ type: mongoose.Schema.ObjectId }],
  website: String,
  picture: String,
  swiped: Boolean,
  soundcloudId: String
});

module.exports = mongoose.model('User', userSchema);
