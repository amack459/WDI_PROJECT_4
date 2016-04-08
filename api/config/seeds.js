var mongoose = require('mongoose');
var User = require('../models/User');
var config = require('./app');
mongoose.connect(config.databaseUrl);

User.collection.drop();

var Acacia = {
  username: "Dinosaurs&Astronauts",
  soundcloudId: "99616712",
  tracks: ["257233526", "257232047"],
  likes: [],
  picture: "https://i1.sndcdn.com/avatars-000158972859-x9ujnq-large.jpg",
  url: "http://soundcloud.com/dinosaurs-astronauts",
  playbackCount: 145
}

User.create(Acacia, function(err, user) {
  User.create([{
    soundcloudId:"45648088",
    username: "SonnyDigital",
    tracks: ["254876642"],
    likes: [user._id],
    picture: "https://i1.sndcdn.com/avatars-000197543038-p38oj6-t200x200.jpg"
  },{
    soundcloudId:"30157446",
    username: "Mike WiLL Made-It",
    tracks: ["244077165"],
    likes: [],
    picture: "https://i1.sndcdn.com/avatars-000100220569-duua1a-t200x200.jpg"
  },{
    soundcloudId:"427196",
    username: "MIKE GAO",
    tracks: ["220143041"],
    likes: [],
    picture: "https://i1.sndcdn.com/avatars-000199685233-khz7a0-t200x200.jpg"
  },{
    soundcloudId:"11974181",
    username: "iamGirl Wonder",
    tracks: ["72214059"],
    likes: [],
    picture: "https://i1.sndcdn.com/avatars-000098580063-jgxpxm-t200x200.jpg"
  },{
    soundcloudId:"902673",
    username: "Cam O'bi",
    tracks: ["90243752"],
    likes: [],
    picture: "https://i1.sndcdn.com/avatars-000197959103-wyzxgk-t200x200.jpg"
  },{
    soundcloudId:"9272003",
    username: "'Nate Fox'",
    tracks: ["230266213"],
    likes: [],
    picture: "https://i1.sndcdn.com/avatars-000197109345-4yho06-t200x200.jpg"
  },{
    soundcloudId:"143792979",
    username: "Gucci Mane",
    tracks: ["244077211"],
    likes: [user._id],
    picture: "https://i1.sndcdn.com/avatars-000169539954-xg1x6r-t200x200.jpg"
  },{
    soundcloudId:"15305282",
    username: "ZaytovenBeatz",
    tracks: ["244077246"],
    likes: [],
    picture: "https://i1.sndcdn.com/avatars-000199982851-ycw1r6-t200x200.jpg"
  },{
    soundcloudId:"6969243",
    username: "'Chance The Rapper'",
    tracks: ["237314506"],
    likes: [user._id],
    picture: "https://i1.sndcdn.com/avatars-000035176561-rg0orz-t200x200.jpg"
  },{
    soundcloudId:"2094414",
    username: "Towkio",
    tracks: ["250073113"],
    likes: [user._id],
    picture: "https://i1.sndcdn.com/avatars-000210120185-irryjo-t200x200.jpg"
  }], function(err, users){
    if(err) console.error(err);
    else console.log(users);
    mongoose.connection.close();
  });
});
