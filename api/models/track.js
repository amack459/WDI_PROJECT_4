var mongoose = require('mongoose')

var trackSchema = mongoose.Schema({
  name: String,
  user: String,
  genre: String,
  artwork_url: String,
  length: String
});

module.exports = mongoose.model('Track', trackSchema);
