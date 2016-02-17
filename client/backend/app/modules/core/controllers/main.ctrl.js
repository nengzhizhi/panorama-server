(function(){
	'use strict';
	angular
		.module('com.module.core')
		.controller('MainCtrl', function ($scope, $rootScope, $q, LoopbackPassport) {
			$scope.menuoptions = $rootScope.menu;

			// LoopbackPassport.ensureCurrentUser(function () {
			// })
			//
			// $scope.currentUser = LoopbackPassport.currentUser;
			// $scope.menuoptions = $rootScope.menu;
		});
})();
