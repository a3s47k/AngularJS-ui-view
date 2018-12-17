angular.module('ashen.router', []).config(_ashenRoute)

function _ashenRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('ashen', {
			url: '/ashen',
			data : { 
				pageTitle: 'Ashen One ' 
			},
			views: {
				"@": {
					controller: 'AshenController',
					templateUrl: '/views/ashen.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			} 
		})
		.state('ashen.list', {
			url: '/list',
			views: {
				"viewName": {
					controller: 'AshenController',
					templateUrl: '/views/color.html',
				}
			} 
		})
		;
}
