angular
  .module('studioVibes', ['satellizer', 'angular-jwt'])
  .constant('API_URL', 'http://localhost:3000')
  .config(oauthConfig);

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
