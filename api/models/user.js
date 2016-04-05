var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  username: String,
  tracks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }],
  matches: [],
  likes: [],
  website: String,
  picture: String,
  swiped: Boolean,
  soundcloudId: String
});

module.exports = mongoose.model('User', userSchema);
