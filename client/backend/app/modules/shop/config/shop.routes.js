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
				.state('app.shop.edit', {
					url: '/edit/:id',
					templateUrl: 'modules/shop/views/form.html',
					controllerAs: 'ctrl',
					controller: function ($stateParams, ShopService, shop, streams) {
						this.shop = shop;
						this.streams = streams;

						this.formFields = ShopService.getFormFields();
						this.formOptions = {};
						this.submit = function () {
							ShopService.upsertShop(this.shop).then(function () {
								console.log('upsert shop success!');
							})
						}
					},
					resolve: {
						shop: function ($stateParams, ShopService) {
							return ShopService.getShop($stateParams.id);
						},
						streams: function ($stateParams, ShopService) {
							return ShopService.getShopStreams($stateParams.id);
						}
					}
				})
				.state('app.shop.stream', {
					url: '/stream/:id',
					templateUrl: 'modules/shop/views/stream-form.html',
					controllerAs: 'ctrl',
					controller: function(){

					}
					// controller: function (ShopService) {
					// 	// this.streams = streams;
					// 	// this.streamFormFields = ShopService.getStreamsFormFields();
					// 	// this.streamFormOptions = {};
					// 	//
					// 	// this.submit = function () {
					// 	//
					// 	// }
					// },
					// resolve: {
					// 	streams: function ($stateParams, ShopService) {
					// 		return ShopService.getShopStreams($stateParams.id);
					// 	}
					// }
				})
		})
})();
