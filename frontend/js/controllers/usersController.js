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


UsersController.$inject = ['$window', '$timeout','$resource', 'API_URL'];
function UsersController($window, $timeout, $resource, API_URL) {

    // Built in options since it's pulling from the RESTful server side
    //   get: {method: 'GET'},
    //   save: {method: 'POST'},
    //   query: {method: 'GET' isArray: true},
    //   remove: {method: 'DELETE'},
    //   delete: {method: 'DELETE'}

    var User = $resource(API_URL + '/users', { id: '@_id'});

    var self = this;
    this.newUser = {};
    this.currentIndex = 0;

    this.all = User.query();

    function stopAudio() {
      $timeout.cancel(t);
      player.pause();
      player.currentTime = 0;
    }

    function playAudio() {

      console.log(self.all[self.currentIndex].tracks.length)
      //
      // player.src = self.users[self.currentIndex].tracks;
      // t = $timeout(function() {
      //   stopAudio();
      // }, 10 * 1000);
    }

    this.swipeRight = function(user) {
      // stopAudio();
      user.swiped = "fadeOutRightBig";
      this.currentIndex++;
      playAudio();
    };

    this.swipeLeft = function(user) {
      // stopAudio();
      user.swiped = "fadeOutLeftBig";
      this.currentIndex++;
      playAudio();
    };

    this.addUser = function(user) {
      User.save(this.newUser).$promise.then(function() {
        self.users.push(this.newUser);
        self.user.swiped = false;
        console.log(users)

        var player = new $window.Audio();
      player.autoplay = true;
      var t;

      playAudio();

      // this.setCurrentUserIndex = function (index) {
      //   this.currentIndex = index;
      // };
      //
      // this.isCurrentUserIndex = function (index) {
      //   return this.currentIndex === index;
      // };

      // this.prevSlide = function () {
      //   this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
      // };
      //
      // this.nextSlide = function () {
      //   this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
      // };
    });
  };
};
