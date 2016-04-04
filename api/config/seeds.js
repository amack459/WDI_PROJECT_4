var mongoose = require('mongoose');
var User = require('../models/user');
var Track = require('../models/track');
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/studioVibes';
mongoose.connect(mongoURI);

User.collection.drop();
User.create([{
  soundcloudId:"99616712",
  name: "SonnyDigital",
  picture: "https://i1.sndcdn.com/avatars-000197543038-p38oj6-t500x500.jpg"
},{
  soundcloudId:"30157446",
  name: "Mike WiLL Made-It",
  picture: "https://i1.sndcdn.com/avatars-000100220569-duua1a-t500x500.jpg"
},{
  soundcloudId:"427196",
  name: "MIKE GAO",
  picture: "https://i1.sndcdn.com/avatars-000199685233-khz7a0-t500x500.jpg"
},{
  soundcloudId:"11974181",
  name: "iamGirl Wonder",
  picture: "https://i1.sndcdn.com/avatars-000098580063-jgxpxm-t500x500.jpg"

},{
  soundcloudId:"902673",
  name: "Cam O&#39;bi",
  picture: "https://i1.sndcdn.com/avatars-000197959103-wyzxgk-t500x500.jpg"

},{
  soundcloudId:"9272003",
  name: "&quot;Nate Fox&quot;",
  picture: "https://i1.sndcdn.com/avatars-000197109345-4yho06-t500x500.jpg"

},{
  soundcloudId:"143792979",
  name: "Gucci Mane",
  picture: "https://i1.sndcdn.com/avatars-000169539954-xg1x6r-t500x500.jpg"

},{
  soundcloudId:"15305282",
  name: "ZaytovenBeatz",
  picture: "https://i1.sndcdn.com/avatars-000169539954-xg1x6r-t500x500.jpg"

},{
  soundcloudId:"6969243",
  name: "&quot;Chance The Rapper&quot;",
  picture: "https://i1.sndcdn.com/avatars-000035176561-rg0orz-t500x500.jpg"

},{
  soundcloudId:"2094414",
  name: "Towkio",
  picture: "https://i1.sndcdn.com/avatars-000210120185-irryjo-t500x500.jpg"

}], function(err, users){
  if(err) console.error(err);
  else console.log(users);
  mongoose.connection.close();
});

User.collection.pretty();
