(function(){
	'use strict';

	angular
		.module('com.module.users')
		.controller('LoginCtrl', function ($scope, $location, $http, LoopbackPassport, User) {
			$scope.user = {};
			$scope.userFields = [
				{
					key: 'username',
					type: 'input',
					templateOptions: {
						placeholder: '账号',
						require: true,
						type: 'input'
					}
				},
				{
					key: 'password',
					type: 'input',
					templateOptions: {
						placeholder: '密码',
						require: true,
						type: 'password'
					}
				}
			]

			$scope.login = function(){
				LoopbackPassport.login($scope.user, function (err, user) {
					if (!!err) {
						$scope.err = err;
						return;
					}

					$location.path('/');
				})
			}
		})
})();
