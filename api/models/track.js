var mongoose = require('mongoose')

var trackSchema = mongoose.Schema({
  title: String,
  user_id: String,
  genre: String,
  artwork_url: String,
  length: String
});

module.exports = mongoose.model('Track', trackSchema);
