'use strict';

angular.module('BeerApp')
  .factory('Beers', ['$resource', function($resource) {
	return $resource('v2/beers?styleId=:styleId&key=ba125c95f00266fa88d83a2a5bdca513',
		{styleId: '@styleId'},
		{'get': {
			method:'GET',
			headers: {
			    'Accept': 'application/json',
			}
		}}
	);
}]);