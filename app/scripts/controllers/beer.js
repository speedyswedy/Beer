'use strict';

angular.module('BeerApp')
  .controller('BeerCtrl', function ($scope, $routeParams, Beer) {
    $scope.beerId = $routeParams.beerId;

    $scope.getBeer = function() {
  		Beer.get({beerId: $scope.beerId}, function(beer) {
  			console.log('HERE:' + beer);
			$scope.beer = beer.data;
		});
  	};

  	 $scope.getBeer();
  });
