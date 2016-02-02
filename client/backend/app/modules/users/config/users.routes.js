(function(){
	'use strict';
	angular
		.module('com.module.users')
		.config(function ($stateProvider) {
			$stateProvider
				.state('app.users', {
					abstract: true,
					url: '/users',
					templateUrl: 'modules/users/views/main.html'
				})
				.state('app.users.list', {
					url: '/list',
					templateUrl: 'modules/users/views/list.html',
					controllerAs: 'ctrl',
					controller: function (users) {
					  this.users = users;
					},
					resolve: {
					  // events: function (EventsService) {
					  //   return EventsService.getEvents();
					  // }
						users: function (){
							// return UsersService.getUsers();
							return [
								{username: 'xxx', email: 'xxx@qq.com', roles: [{name: '店员'}, {name: '管理员'}]}
							]
						}
					}
				})
				.state('app.users.add', {
					url: '/add',
					templateUrl: 'modules/users/views/form.html',
					controllerAs: 'ctrl',
					controller: function ($state, UserService) {
						this.formFields = UserService.getFormFields('add');
						this.submit = function(){

						}
					},
					resolve: {
						user: function(){
							return {};
						}
					}
				})
				.state('app.users.edit', {
					url: '/edit/:id',
					templateUrl: 'modules/users/views/form.html',
					controllerAs: 'ctrl',
					controller: function ($state, UserService, user) {
						this.user = user;
						this.formFields = UserService.getFormFields('edit');
						this.submit = function () {
							$state.go('^.list');
						}
					},
					resolve: {
						user: function () {
							return { username: 'xxx' }
						}
					}
				})
				.state('login', {
					url: '/login',
					templateUrl: 'modules/users/views/login.html',
					controller: 'LoginCtrl',
					controllerAs: 'ctrl'
				})

		})
})();
