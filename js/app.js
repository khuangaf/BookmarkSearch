
var app = angular.module("bookmarkSearch", ['ngMaterial', 'ngMessages']); 
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('docs-dark')
    .primaryPalette('blue') // specify primary color, all
                            // other color intentions will be inherited
                            // from default
});