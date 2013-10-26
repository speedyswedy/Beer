'use strict';

angular.module('BeerApp')
  .controller('MainCtrl', function ($scope, Styles, $location) {

  	$scope.totalNumberOfStyles = 0;
  	$scope.styles = [];

   	$scope.getStyles = function() {
  		Styles.get({}, function(styles) {
  			$scope.totalNumberOfStyles = styles.data.length;
			$scope.styles = styles.data;
		});
  	};

  	$scope.showBeers = function(styleId) {
  		$location.path("beers/" + styleId);
  	};

  	$scope.predicate = '-name';

  	$scope.getStyles();
  });
