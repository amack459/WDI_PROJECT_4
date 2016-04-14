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


UsersController.$inject = ['$window', '$timeout','$resource', 'SOUNDCLOUD_API_URL', 'SOUNDCLOUD_API_KEY', 'tokenService'];
function UsersController($window, $timeout, $resource, SOUNDCLOUD_API_URL, SOUNDCLOUD_API_KEY, tokenService) {

  var User = $resource('/users/:id', { id: '@_id'}, { update: {method:'PUT'}});
  var player = new Audio();
  player.autoplay = true;
  var t;

  var self = this;
  // this.newUser = {};
  this.currentIndex = 0;

  // User.get({ id: tokenService.getUser()._id}, function(user) {
  //   self.loggedInUser = user;
  // });

  if (!!tokenService.getUser()) {
    self.loggedInUser = User.get({ id: tokenService.getUser()._id})
  }

  this.matchedUsers = [];

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

    self.loggedInUser = User.get({ id: tokenService.getUser()._id})
    self.loggedInUser.$promise.then(function(user) {
      user.likes.push(userId);
      User.update({ id: user._id }, user, function(user) {
        console.log(user);
      });
    })
    self.currentIndex++;
    playAudio();
  };

  this.swipeLeft = function(user) {
    stopAudio();
    user.swiped = "fadeOutLeftBig";
    this.currentIndex++;
    playAudio();
  };

  this.profileIsShowing = false;
  this.profileUser = {};

  this.showProfile = function(user) {
    console.log(user);
    stopAudio();
    this.profileIsShowing = true;
    User.get({id: user._id}, function(user) {
      this.profileUser = user;
      if (user.matches != []) {
        user.matches.forEach(function(match) {
          User.get({id: match}, function(user) {
            self.matchedUsers.push(user);
          })
        });
      }
    });
  }
};
