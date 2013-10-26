'use strict';

angular.module('BeerApp', [
  'ngResource'
])
  .config(function ($routeProvider) {
    console.log('here');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
       .when('/beers', {
        templateUrl: 'views/beers.html',
        controller: 'BeersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  
  });
