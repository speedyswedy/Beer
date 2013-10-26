'use strict';

angular.module('BeerApp')
  .factory('Beers', ['$resource', function($resource) {
	return $resource('v2/beers?name=:name&key=ba125c95f00266fa88d83a2a5bdca513',
		{name: '@name'},
		{'get': {
			method:'GET',
			headers: {
			    'Accept': 'application/json',
			}
		}}
	);
}]);