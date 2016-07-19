angular.module('app',[])
.value('realname','zhaoliu')
.value('realname','nidayt')
.constant('http','wwww.baidu.com')
.constant('http','wwww.sohu.com')
.factory('Data',function(){
	return{
		msg:'你好啊',
		setMsg:function(){
			this.msg='我是你大爷'
		}
	}
	// new dd()
})
.service('User',function(){
	this.firstName='上',
	this.lastName='飞',
	this.getName=function(){
		return this.firstName+this.lastName
	}
})
.controller('myCtrl',function($scope,realname,http,Data,User){
	$scope.msg='你好'
	$scope.realname=realname
	$scope.http=http
	$scope.data=Data
	Data.setMsg()
	$scope.uname=User.getName()
})
function dd(){
	this.firstName='上',
	this.lastName='飞',
	this.getName=function(){
		return this.firstName+this.lastName
	}
}