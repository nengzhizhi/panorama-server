(function(){
	'use strict';
	angular
		.module('com.module.core')
		.controller('MainCtrl', function ($scope, $rootScope, $location, LoopbackPassport) {
			LoopbackPassport.ensureCurrentUser(function () {
			})

			$scope.currentUser = LoopbackPassport.currentUser;
			$scope.menuoptions = $rootScope.menu;
		});
})();
