var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  username: String,
  tracks: [],
  likes: [{ type: mongoose.Schema.ObjectId }],
  matches: [{ type: mongoose.Schema.ObjectId }],
  website: String,
  picture: String,
  soundcloudId: String,
  url: String,
  country: String,
  city: String,
  trackCount: Number,
  playlistCount: Number,
  playbackCount: Number
});

userSchema.pre('save', function(next) {
  if(!this.isModified('likes')) return next();

  var self = this;

  this.constructor.find({ _id: { $in: this.likes }, likes: this._id }, function(err, users) {
    if(err) return next(err);
    self.matches = users.map(function(user) { return user._id });
    next();
  });
});

module.exports = mongoose.model('User', userSchema);
