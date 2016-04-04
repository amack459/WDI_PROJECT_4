angular
  .module('studioVibes')
  .controller('UsersController', UsersController);


UsersController.$inject = ['$window', '$timeout', 'SOUNDCLOUD_API_URL', 'SOUNDCLOUD_API_KEY','$resource', 'API_URL'];
function UsersController($window, $timeout, SOUNDCLOUD_API_URL, SOUNDCLOUD_API_KEY,$resource, API_URL) {


    // Built in options since it's pulling from the RESTful server side
    //   get: {method: 'GET'},
    //   save: {method: 'POST'},
    //   query: {method: 'GET' isArray: true},
    //   remove: {method: 'DELETE'},
    //   delete: {method: 'DELETE'}




     var User = $resource(API_URL, { id: '@_id'});

     var self = this;
     this.newUser = {};

     this.users   = User.query();

     this.addUser       = function(user) {
      User.save(this.newUser).$promise.then(function() {
        self.users.push(this.newUser);
        console.log(users)

        var player = new $window.Audio();
      player.autoplay = true;
      var t;

      playAudio();

      function playAudio() {
        player.src = self.slides[self.currentIndex].audio;

        t = $timeout(function() {
          stopAudio();
        }, 10 * 1000);
      }

      function stopAudio() {
        $timeout.cancel(t);
        player.pause();
        player.currentTime = 0;
      }

      this.setCurrentSlideIndex = function (index) {
        this.currentIndex = index;
      };

      this.isCurrentSlideIndex = function (index) {
        return this.currentIndex === index;
      };

      // this.prevSlide = function () {
      //   this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
      // };
      //
      // this.nextSlide = function () {
      //   this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
      // };

      this.swipeRight = function(element) {
        stopAudio();
        element.swiped = "fadeOutRightBig";
        this.currentIndex++;
        playAudio();
      };

      this.swipeLeft = function(element) {
        stopAudio();
        element.swiped = "fadeOutLeftBig";
        this.currentIndex++;
        playAudio();
      };
    });
  }
};
