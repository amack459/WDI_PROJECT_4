angular
  .module('studioVibes')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', 'tokenService', '$scope'];
function MainController($auth, tokenService, $scope) {

  var self = this;

  this.isLoggedIn = function() {
    return !!tokenService.getToken();
  }

  this.currentUser = tokenService.getUser();

  this.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function() {
        self.currentUser = tokenService.getUser();
      });
  }

  this.logout = function() {
    tokenService.removeToken();
    this.currentUser = null;
  }

}
