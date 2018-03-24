var priceCalc = angular.module('priceCalc', ['ngMaterial', 'ngMessages', 'ngAnimate']);
priceCalc.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('pink')
      .accentPalette('orange');
  });