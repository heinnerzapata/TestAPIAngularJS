angular.module('myApp', ['testService']);

angular.module('myApp').controller('testController', ['$scope','testRequest',testController]);
function testController($scope, testRequest) {
	$scope.posts={};
	$scope.getAllPosts = function(){
		testRequest.posts().success(function (data){
			$scope.posts=data; // Asignaremos los datos de todos los posts
			$scope.posts.exist=1;
		});
	}
	$scope.getPost = function(){
		$scope.unPost={};
		testRequest.post($scope.post_id).success(function (data){
			$scope.unPost=data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.posts.exist=0;
		});
	}
}
