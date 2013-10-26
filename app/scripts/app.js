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
       .when('/beers/:styleId', {
        templateUrl: 'views/beers.html',
        controller: 'BeersCtrl'
      })
      .when('/beer/:beerId', {
        templateUrl: 'views/beer.html',
        controller: 'BeerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  
  });
