angular.module('ashen.controller', []).controller("AshenController", _ashenController)

function _ashenController($scope, $http,) {
	$http({
		method: 'GET',
		url: '/db/items.json',
		
	}).then(function (response) {
		$scope.data = eval(response.data.items);
	}, function (error) {
		console.log('Lỗi 001 - Menu: ' + error);
	});
}
