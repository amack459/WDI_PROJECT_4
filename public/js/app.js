angular
  .module('studioVibes', ['satellizer', 'angular-jwt', 'ngResource', 'ngTouch'])
  .constant('SOUNDCLOUD_API_URL', 'https://api.soundcloud.com')
  .config(oauthConfig)
  .config(SecureURL);

oauthConfig.$inject = ['$authProvider', 'SOUNDCLOUD_API_KEY'];
function oauthConfig($authProvider, SOUNDCLOUD_API_KEY) {
  $authProvider.oauth2({
    name: 'soundcloud',
    url: '/auth/soundcloud',
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


