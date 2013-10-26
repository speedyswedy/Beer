'use strict';

angular.module('BeerApp')
   .factory('Styles', ['$resource', function($resource) {
	return $resource('v2/styles?key=ba125c95f00266fa88d83a2a5bdca513',
		{},
		{'get': {
			method:'GET',
			headers: {
			    'Accept': 'application/json',
			}
		}}
	);
}]);
