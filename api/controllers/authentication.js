var request = require('request-promise');
var jwt = require('jsonwebtoken');
var User = require('../models/User');
var config = require('../config/app');
var oauth = require('../config/oauth');
var Promise = require('bluebird');

function soundcloud(req, res) {
  var params = {
    client_id: process.env.SOUNDCLOUD_API_KEY,
    client_secret: process.env.SOUNDCLOUD_API_SECRET,
    redirect_uri: config.appUrl,
    grant_type: 'authorization_code',
    code: req.body.code
  }

  // step 1, we make a request to soundcloud for an access token
  request.post({
    url: oauth.soundcloud.accessTokenUrl,
    form: params,
    json: true
  })
  // step 2, we use the access token to get the user's profile data from soundcloud's api
  .then(function(response) {
    return request.get({
      url: oauth.soundcloud.profileUrl + '/tracks',
      qs: { oauth_token: response.access_token },
      json: true
    })
  })
  .then(function(response) {
    console.log(response[0].id);
    var track = response[0]
    var profile = response[0].user

      // step 3, try to find a user in our database by their user id
    return User.findOne({ soundcloudId: profile.id })
      .then(function(user) {
      // if a user is found, set their soundcloudId and picture to their profile data
        if(user) {
          user.picture = user.picture || profile.avatar_url;
        }
        else {
        // otherwise, create a new user record with the user's profile data from soundcloud
          user = new User({
            soundcloudId: profile.id,
            username: profile.username,
            picture: profile.avatar_url,
            // trackIds: // get the track ids
            tracks: [{id: track.id}]

          });

        }
        // either way, save the user record
        return user.save();

        console.log(user);
      });
  })
  .then(function(user) {
    // create a JWT and send it back to StudioVibes
    var payload = { _id: user._id, name: user.name, picture: user.picture, soundcloudId: user.soundcloudId };
    var token = jwt.sign(payload, config.secret, { expiresIn: '24h' });
    return res.send({ token: token, user: payload });
  })
  .catch(function(err) {
    // handle any errors here
    console.log(err);
    return res.status(500).send();
  });
}

module.exports = {
  soundcloud: soundcloud
};
