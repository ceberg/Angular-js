angular.module('app',[]).controller('FirstCtrl',function($scope){
	$scope.user={name:'',pwd:''}
	$scope.reverse=function(){
		return $scope.msg.split('').reverse().join(
			'')
	}
	$scope.login=function(){
		console.log($scope.user)
	}
})