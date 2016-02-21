(function(){
	'use strict';
	angular
		.module('com.module.core')
		.controller('MainCtrl', function ($scope, $rootScope, $q, User) {
			$scope.currentUser = User.getCurrent();
			$scope.menuoptions = $rootScope.menu;

			// LoopbackPassport.ensureCurrentUser(function () {
			// })
			//
			// $scope.currentUser = LoopbackPassport.currentUser;
			// $scope.menuoptions = $rootScope.menu;
		});
})();
