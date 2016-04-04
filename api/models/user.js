var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  name: String,
  tracks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  matches: [],
  likes: [],
  website: String,
  picture: String,
  soundcloudId: String
});

module.exports = mongoose.model('User', userSchema);
