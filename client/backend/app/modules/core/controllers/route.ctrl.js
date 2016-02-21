(function(){
	'use strict';
	angular
		.module('com.module.core')
		.controller('RouteCtrl', function (ApiService, User, $location) {
			console.log(User.currentUser);
			if (!User.currentUser) {
				$location.path('/login');
			} else {
				$location.path('/app');
			}
		})
})();
