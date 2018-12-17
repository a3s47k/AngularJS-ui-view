angular.module('details.controller', []).controller("DetailsController", _detailsController)

function _detailsController($scope, $http, $stateParams) {
	$http({
		method: 'GET',
		url: '/db/catergory.json'
	}).then(function (response) {
		console.log(response.data.catergory[1].color)
		$scope.data = eval(response.data.catergory[$stateParams.id-1].color);

	}, function (error) {
		console.log('Lỗi 000Deail - Main: ' + error);
	});
	
}
