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

  this.all = User.query();
  this.likes = [];

  function stopAudio() {
    $timeout.cancel(t);
    player.pause();
    player.currentTime = 0;
  }

  function playAudio() {

    var trackSRCs = self.all[self.currentIndex].tracks.map(function(id) {
      console.log(self.all[self.currentIndex]._id)
      return SOUNDCLOUD_API_URL + '/tracks/' + id + '/stream?client_id=' + SOUNDCLOUD_API_KEY
    });

    player.src = trackSRCs[0];
    t = $timeout(function() {
      stopAudio();
    }, 15 * 1000);
  }

  this.swipeRight = function(user) {
    stopAudio();
    console.log(user);
    var userId = self.all[self.currentIndex]._id;
    user.swiped = "fadeOutRightBig";
    this.likes.push(userId);
    console.log(this.likes)
    user.id = userId;
    this.currentIndex++;
    playAudio();
    User.update({id: user._id}, this.likes, function(user) {
      this.likes = user.likes;
    })
    // this.likes = User.save(user.likes.push(self.all[self.currentIndex]._id));
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
