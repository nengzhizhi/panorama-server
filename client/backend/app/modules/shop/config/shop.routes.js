(function(){
	'use strict';
	angular
		.module('com.module.shop')
		.config(function ($stateProvider) {
			$stateProvider
				.state('app.shop', {
					abstract: true,
					url: '/shop',
					templateUrl: 'modules/shop/views/main.html'
				})
				.state('app.shop.list', {
					url: '/list',
					templateUrl: 'modules/shop/views/list.html',
					controllerAs: 'ctrl',
					controller: function (shops) {
						this.shops = shops;
					},
					resolve: {
						shops: function (Shop) {
							return Shop.find().$promise;
						}
					}
				})
		})
})();
