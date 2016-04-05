angular
  .module('studioVibes')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', 'tokenService', '$scope', '$resource', 'API_URL'];
function MainController($auth, tokenService, $scope, $resource, API_URL) {

  var self = this;

  this.isLoggedIn = function() {
    return !!tokenService.getToken();
  }

  this.currentUser = tokenService.getUser();


  this.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function() {
        // var Soundcloud = $resource(API_URL + '/auth/soundcloud', {id: '@id'})
        //REQUIRES CODE FROM SOUNDCLOUD
        // Soundcloud.save();
        self.currentUser = tokenService.getUser();
        console.log(self.currentUser)
      });
  }

  this.logout = function() {
    tokenService.removeToken();
    this.currentUser = null;
  }

}
