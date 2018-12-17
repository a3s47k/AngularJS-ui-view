angular.module('details.router', []).config(_detailsRoute)

function _detailsRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('details', {
			url: '/ashen/:id',
			views: {

				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				},
				"catergory@": {
					controller: 'AshenController',
					templateUrl: '/views/ashen.html'
				},
				"catergory-color@": {
					controller: 'DetailsController',
					templateUrl: '/views/details.html',
				}
			}
		});
}
