'use strict';

angular.module('BeerApp')
 .factory('Beer', ['$resource', function($resource) {
	return $resource('v2/beer/:beerId?key=ba125c95f00266fa88d83a2a5bdca513',
		{beerId: '@beerId'},
		{'get': {
			method:'GET',
			headers: {
			    'Accept': 'application/json',
			}
		}}
	);
}]);
