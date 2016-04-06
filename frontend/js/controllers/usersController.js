angular
  .module('studioVibes')
  .controller('UsersController', UsersController)
  .config(SecureURL);

SecureURL.$inject = ['$sceDelegateProvider', 'SOUNDCLOUD_API_URL'];
function SecureURL($sceDelegateProvider, SOUNDCLOUD_API_URL) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    SOUNDCLOUD_API_URL + '/**'
  ]);
}


UsersController.$inject = ['$window', '$timeout','$resource', 'API_URL', 'SOUNDCLOUD_API_URL', 'SOUNDCLOUD_API_KEY', 'tokenService'];
function UsersController($window, $timeout, $resource, API_URL, SOUNDCLOUD_API_URL, SOUNDCLOUD_API_KEY, tokenService) {

  var User = $resource(API_URL + '/users/:id', { id: '@_id'}, { update: {method:'PUT'}});
  var player = new Audio();
  player.autoplay = true;
  var t;

  var self = this;
  // this.newUser = {};
  this.currentIndex = 0;
  this.loggedInUser = User.get({ id: tokenService.getUser()._id });


  this.all = User.query(function(users) {
    playAudio();
  });

  function stopAudio() {
    $timeout.cancel(t);
    player.pause();
    player.currentTime = 0;
  }

  function playAudio() {

    var index = (self.all.length - self.currentIndex-1);
    var trackSRCs = self.all[index].tracks.map(function(id) {
      console.log(self.all[index]);
      return SOUNDCLOUD_API_URL + '/tracks/' + id + '/stream?client_id=' + SOUNDCLOUD_API_KEY
    });
    player.src = trackSRCs[0];
    t = $timeout(function() {
      stopAudio();
    }, 15 * 1000);
  }

  this.swipeRight = function(user) {
    stopAudio();
    var index   = (self.all.length - self.currentIndex-1);
    var userId  = self.all[index]._id;

    user.swiped = "fadeOutRightBig";
    console.log(self.loggedInUser);
    self.loggedInUser.likes.push(userId);

    User.update({ id: self.loggedInUser._id }, self.loggedInUser, function(user) {
      console.log(user);
    });

    self.currentIndex++;
    playAudio();

  };

  this.swipeLeft = function(user) {
    stopAudio();
    user.swiped = "fadeOutLeftBig";
    this.currentIndex++;
    playAudio();
  };

  // this.addUser = function(user) {
  //   User.save(this.newUser).$promise.then(function() {
  //     self.users.unshift(this.newUser);
  //     self.user.swiped = false;
  //
  //   });
  // };

  // this.matches = function(user) {
    // var index = (self.all.length - self.currentIndex-1);
    // var matches = self.all[index].matches;
    // var userId = self.all[index]._id;
    // self.all[index].likes.map(function(index) {
      // console.log(self.all[index].likes);
      // console.log("+++++++++++++++++++++++++++++++++++++");

  // compare current user's likes with other users' likes
  // if your id is in their likes
  // if their id is in your likes
  // push ids into respective matches array
  // });
// };

  // this.matches();

  // this.updateUser = function(id) {
  //   User.update({id: id}, {likes: this.likes}, function(user) {
  //     // console.log(user);
  //     // console.log("+++++++++++++++++++++++++++++++++++++");
  //   })
  // }
};
