angular.module('studioVibes')
.service('audioService', AudioService);

AudioService.$inject = ['$window', 'jwtHelper', 'tokenService', 'SOUNDCLOUD_API_URL', 'SOUNDCLOUD_API_KEY'];
function AudioService($window, jwtHelper, tokenService, SOUNDCLOUD_API_URL, SOUNDCLOUD_API_KEY) {
  var self = this;
  var player = new Audio();
  player.autoplay = true;
  var t;

  var User = $resource('/users/:id', { id: '@_id'}, { update: {method:'PUT'}});

  self.playAudio = function() {
    if (!!tokenService.getToken()) {
      console.log("Token present, playing audio");
      var index = (self.all.length - self.currentIndex-1);

      var trackSRCs = self.all[index].tracks.map(function(id) {
          // console.log(self.all[index]);
          return SOUNDCLOUD_API_URL + '/tracks/' + id + '/stream?client_id=' + SOUNDCLOUD_API_KEY
        });

      player.src = trackSRCs[0];
      t = $timeout(function() {
        stopAudio();
      }, 15 * 1000);
    } else {
      console.log("No token present, not playing audio");
    }

  self.stopAudio = function() {
    $timeout.cancel(t);
    player.pause();
    player.currentTime = 0;
    }
  }
}
