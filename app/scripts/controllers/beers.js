'use strict';

angular.module('BeerApp')
  .controller('BeersCtrl', function ($scope, $routeParams, Beers, $location) {

  	$scope.styleId = $routeParams.styleId;

  	$scope.totalResults = 0;
  	$scope.beers = []; 

  	$scope.getBeers = function() {
  		Beers.get({styleId: $scope.styleId}, function(beers) {
  			$scope.totalResults = beers.totalResults;
			$scope.beers = beers.data;
		});
  	};

  	$scope.showBeer = function(beerId) {
  		$location.path("beer/" + beerId);
  	};

  	$scope.predicate = '-name';

  	$scope.getBeers();

  });
