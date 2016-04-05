var mongoose = require('mongoose');
var User = require('../models/User');
var Track = require('../models/Track');
var config = require('./app');
mongoose.connect(config.databaseUrl);

User.collection.drop();
User.create([{
  soundcloudId:"45648088",
  username: "SonnyDigital",
  swiped: false,
  picture: "https://i1.sndcdn.com/avatars-000197543038-p38oj6-t200x200.jpg"
},{
  soundcloudId:"30157446",
  username: "Mike WiLL Made-It",
  swiped: false,
  picture: "https://i1.sndcdn.com/avatars-000100220569-duua1a-t200x200.jpg"
},{
  soundcloudId:"427196",
  username: "MIKE GAO",
  swiped: false,
  picture: "https://i1.sndcdn.com/avatars-000199685233-khz7a0-t200x200.jpg"
},{
  soundcloudId:"11974181",
  username: "iamGirl Wonder",
  swiped: false,
  picture: "https://i1.sndcdn.com/avatars-000098580063-jgxpxm-t200x200.jpg"

},{
  soundcloudId:"902673",
  username: "Cam O&#39;bi",
  swiped: false,
  picture: "https://i1.sndcdn.com/avatars-000197959103-wyzxgk-t200x200.jpg"

},{
  soundcloudId:"9272003",
  username: "&quot;Nate Fox&quot;",
  swiped: false,
  picture: "https://i1.sndcdn.com/avatars-000197109345-4yho06-t200x200.jpg"

},{
  soundcloudId:"143792979",
  username: "Gucci Mane",
  swiped: false,
  picture: "https://i1.sndcdn.com/avatars-000169539954-xg1x6r-t200x200.jpg"

},{
  soundcloudId:"15305282",
  username: "ZaytovenBeatz",
  swiped: false,
  picture: "https://i1.sndcdn.com/avatars-000199982851-ycw1r6-t200x200.jpg"

},{
  soundcloudId:"6969243",
  username: "&quot;Chance The Rapper&quot;",
  swiped: false,
  picture: "https://i1.sndcdn.com/avatars-000035176561-rg0orz-t200x200.jpg"

},{
  soundcloudId:"2094414",
  username: "Towkio",
  swiped: false,
  picture: "https://i1.sndcdn.com/avatars-000210120185-irryjo-t200x200.jpg"

}], function(err, users){
  if(err) console.error(err);
  else console.log(users);
  mongoose.connection.close();
});
