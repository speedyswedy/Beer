'use strict';

angular.module('BeerApp')
  .controller('BeersCtrl', function ($scope, Beers) {

  	$scope.id = 0;

  	$scope.getBeers = function() {
  		Beers.get({name: 'Belgian Dubbel'}, function(beer) {
			$scope.id = beer.data[0]['id'];
		});
  	};

  });
