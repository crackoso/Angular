app.controller('customersController', function CustomerController($scope){

	$scope.sortBy = 'name';
	$scope.reverse = false;

	$scope.customers=[
		{
			joined: '2017-05-23', 
			name:'Hibran', 
			city:'Cambridge', 
			orderTotal: 9.3476
		},{
			joined: '2017-07-30', 
			name:'Emmanuel', 
			city:'Somerville', 
			orderTotal:2.45665
		},{
			joined: '2017-10-13', 
			name:'Juan Pablo', 
			city:'Mexico DF', orderTotal: 10.2323
		},{
			joined: '2017-02-02', 
			name:'Bertin Alejo', 
			city:'Mexico DF', 
			orderTotal:25.7783
		}];
	$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		}

});