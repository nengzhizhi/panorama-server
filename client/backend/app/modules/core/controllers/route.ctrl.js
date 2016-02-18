(function(){
	'use strict';
	angular
		.module('com.module.core')
		.controller('RouteCtrl', function (ApiService, LoopbackPassport, $location) {
			// if (!LoopbackPassport.currentUser) {
			// 	$location.path('/login');
			// } else {
			// 	$location.path('/app');
			// }
			$location.path('/app');
		})
})();
