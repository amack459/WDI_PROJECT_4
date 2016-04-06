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


UsersController.$inject = ['$window', '$timeout','$resource', 'API_URL', 'SOUNDCLOUD_API_URL', 'SOUNDCLOUD_API_KEY'];
function UsersController($window, $timeout, $resource, API_URL, SOUNDCLOUD_API_URL, SOUNDCLOUD_API_KEY) {

  var User = $resource(API_URL + '/users/:id', { id: '@_id'}, { update: {method:'PUT'}});
  var player = new Audio();
  player.autoplay = true;
  var t;

  var self = this;
  this.newUser = {};
  this.currentIndex = 0;

  // this.currentUser =

  this.all = User.query(function(users) {
    playAudio;
  });
  this.likes = [];

  function stopAudio() {
    $timeout.cancel(t);
    player.pause();
    player.currentTime = 0;
  }

  function playAudio() {
    var index = (self.all.length - self.currentIndex-1)
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
    var userId = self.all[self.currentIndex]._id;
    user.swiped = "fadeOutRightBig";
    this.likes.push(userId);
    this.currentIndex++;
    playAudio();
    // updateUser(user);
  };

  this.swipeLeft = function(user) {
    stopAudio();
    user.swiped = "fadeOutLeftBig";
    this.currentIndex++;
    playAudio();
  };

  this.addUser = function(user) {
    User.save(this.newUser).$promise.then(function() {
      self.users.unshift(this.newUser);
      self.user.swiped = false;

    });
  };
};
