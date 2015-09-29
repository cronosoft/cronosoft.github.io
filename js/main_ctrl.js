app.controller('MainCtrl', function ($scope, $http) {
	$scope.products = [];
	$http({method: 'GET', url: 'data/products.json'}).success(function(data, status, headers, config) {
		$scope.products = data;
		console.log(data);	
	});
});