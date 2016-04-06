var mongoose = require('mongoose');
var User = require('../models/User');
var config = require('./app');
mongoose.connect(config.databaseUrl);

User.collection.drop();
User.create([{
  soundcloudId:"45648088",
  username: "SonnyDigital",
  tracks: ["254876642"],
  picture: "https://i1.sndcdn.com/avatars-000197543038-p38oj6-t200x200.jpg"
},{
  soundcloudId:"30157446",
  username: "Mike WiLL Made-It",
  tracks: ["244077165"],
  picture: "https://i1.sndcdn.com/avatars-000100220569-duua1a-t200x200.jpg"
},{
  soundcloudId:"427196",
  username: "MIKE GAO",
  tracks: ["220143041"],
  picture: "https://i1.sndcdn.com/avatars-000199685233-khz7a0-t200x200.jpg"
},{
  soundcloudId:"11974181",
  username: "iamGirl Wonder",
  tracks: ["72214059"],
  picture: "https://i1.sndcdn.com/avatars-000098580063-jgxpxm-t200x200.jpg"
},{
  soundcloudId:"902673",
  username: "Cam O&#39;bi",
  tracks: ["90243752"],
  picture: "https://i1.sndcdn.com/avatars-000197959103-wyzxgk-t200x200.jpg"
},{
  soundcloudId:"9272003",
  username: "&quot;Nate Fox&quot;",
  tracks: ["230266213"],
  picture: "https://i1.sndcdn.com/avatars-000197109345-4yho06-t200x200.jpg"
},{
  soundcloudId:"143792979",
  username: "Gucci Mane",
  tracks: ["244077211"],
  picture: "https://i1.sndcdn.com/avatars-000169539954-xg1x6r-t200x200.jpg"
},{
  soundcloudId:"15305282",
  username: "ZaytovenBeatz",
  tracks: ["244077246"],
  picture: "https://i1.sndcdn.com/avatars-000199982851-ycw1r6-t200x200.jpg"
},{
  soundcloudId:"6969243",
  username: "&quot;Chance The Rapper&quot;",
  tracks: ["237314506"],
  picture: "https://i1.sndcdn.com/avatars-000035176561-rg0orz-t200x200.jpg"
},{
  soundcloudId:"2094414",
  username: "Towkio",
  tracks: ["250073113"],
  picture: "https://i1.sndcdn.com/avatars-000210120185-irryjo-t200x200.jpg"
}], function(err, users){
  if(err) console.error(err);
  else console.log(users);
  mongoose.connection.close();
});
