angular
  .module('studioVibes', ['satellizer', 'angular-jwt', 'ngTouch'])
  .constant('API_URL', 'http://localhost:3000')
  .constant('SOUNDCLOUD_API_URL', 'https://api.soundcloud.com')
  .config(oauthConfig)
  .config(SecureURL)
  .controller('UserController', UserController);

oauthConfig.$inject = ['API_URL', '$authProvider', 'SOUNDCLOUD_API_KEY'];
function oauthConfig(API_URL, $authProvider, SOUNDCLOUD_API_KEY) {
  $authProvider.oauth2({
    name: 'soundcloud',
    url: API_URL + '/auth/soundcloud',
    clientId: SOUNDCLOUD_API_KEY,
    authorizationEndpoint: 'https://soundcloud.com/connect',
    redirectUri: location.origin,
    scope: 'non-expiring'
  });
  $authProvider.tokenPrefix = null;
}

SecureURL.$inject = ['$sceDelegateProvider', 'SOUNDCLOUD_API_URL'];
function SecureURL($sceDelegateProvider, SOUNDCLOUD_API_URL) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    SOUNDCLOUD_API_URL + '/**'
  ]);
}

UserController.$inject = ['$window', '$timeout', 'SOUNDCLOUD_API_URL', 'SOUNDCLOUD_API_KEY'];
function UserController($window, $timeout, SOUNDCLOUD_API_URL, SOUNDCLOUD_API_KEY) {
  var self = this;

  this.currentIndex = 0;

  this.users = [
    {image: 'css/images/image1.jpg', description: 'Image 01', swiped: false, audio: SOUNDCLOUD_API_URL + '/tracks/257232047/stream?client_id=' + SOUNDCLOUD_API_KEY },
    {image: 'css/images/image2.jpg', description: 'Image 02', swiped: false, audio: SOUNDCLOUD_API_URL + '/tracks/257232047/stream?client_id=' + SOUNDCLOUD_API_KEY },
    {image: 'css/images/image3.jpg', description: 'Image 03', swiped: false, audio: SOUNDCLOUD_API_URL + '/tracks/257232047/stream?client_id=' + SOUNDCLOUD_API_KEY },
    {image: 'css/images/image4.jpg', description: 'Image 04', swiped: false, audio: SOUNDCLOUD_API_URL + '/tracks/257232047/stream?client_id=' + SOUNDCLOUD_API_KEY },
    {image: 'css/images/image5.jpg', description: 'Image 05', swiped: false, audio: SOUNDCLOUD_API_URL + '/tracks/257232047/stream?client_id=' + SOUNDCLOUD_API_KEY },
    {image: 'css/images/image6.jpg', description: 'Image 06', swiped: false, audio: SOUNDCLOUD_API_URL + '/tracks/257232047/stream?client_id=' + SOUNDCLOUD_API_KEY }
  ];

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
}
