var priceCalc = angular.module('priceCalc', ['ngMaterial', 'ngMessages', 'ngAnimate']);
priceCalc.config(function($mdThemingProvider) {
  var primaryColorMap =
    $mdThemingProvider.extendPalette('cyan', {
    'contrastDefaultColor': 'light'
    }); 
  $mdThemingProvider.definePalette('primaryColor', primaryColorMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('primaryColor', {
      'default': '500',
      'hue-1': 'A200',
      'hue-2': '700',
    })
    .accentPalette('light-green', {
      'default': '700',
      'hue-1': 'A200',
      'hue-2': '800'
    });
    
    $mdThemingProvider.theme('dark')

    .primaryPalette('cyan', {

      'default': '500',

      'hue-1': 'A200',

      'hue-2': '700'

    })

    .accentPalette('light-green', {

      'default': '700',

      'hue-1': 'A200',

      'hue-2': '800'

    })

  .dark();
});