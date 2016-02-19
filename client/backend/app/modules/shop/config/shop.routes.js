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
				
				.state('app.shop.add', {
					url: '/add',
					templateUrl: 'modules/shop/views/form.html',
					controllerAs: 'ctrl',
					controller: function ($state, ShopService, shop) {
						this.shop = shop;
						this.formFields = ShopService.getFormFields();
						this.formOptions = {};

						this.submit = function () {
							ShopService.upsertShop(this.shop).then(function (shop) {
								$state.go('app.shop.edit', { id: shop.id });
							})
						}
					},
					resolve: {
						shop: function(){}
					}
				})
				.state('app.shop.list', {
					url: '/list',
					templateUrl: 'modules/shop/views/list.html',
					controllerAs: 'ctrl',
					controller: function (ShopService, $state, shops) {
						this.shops = shops;
						this.deleteShop = function (shopId) {
							ShopService.deleteShop(shopId, function(){
								$state.go($state.current, {}, {reload: true});
							});
						}
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
					controller: function ($state, $stateParams, ShopService, StreamService, shop, streams) {
						this.shop = shop;
						this.streams = streams;

						this.formFields = ShopService.getFormFields();
						this.formOptions = {};
						this.submit = function () {
							ShopService.upsertShop(this.shop).then(function () {
								$state.go($state.current, {}, {reload: true});
							})
						}
						this.deleteStream = function (streamId) {
							StreamService.deleteLiveStream(streamId, function(){
								$state.go($state.current, {}, {reload: true});
							});
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
				.state('app.shop.editStream', {
					url: '/editStream/:id',
					templateUrl: 'modules/shop/views/stream-form.html',
					controllerAs: 'ctrl',
					controller: function (StreamService, stream) {
						this.stream = stream;
						this.formFields = StreamService.getFormFields();
						this.formOptions = {};

						this.submit = function () {
							return StreamService.upsertLiveStream(this.stream).then(function () {
								alert('修改成功！');
							})
						}
					},
					resolve: {
						stream: function ($stateParams, StreamService) {
							return StreamService.getLiveStream($stateParams.id);
						}
					}
				})
				.state('app.shop.addStream', {
					url: '/addStream/:shopId',
					templateUrl: 'modules/shop/views/stream-form.html',
					controllerAs: 'ctrl',
					controller: function ($state, StreamService, stream) {
						this.stream = stream;
						this.formFields = StreamService.getFormFields();
						this.formOptions = {};

						this.submit = function () {
							StreamService.upsertLiveStream(this.stream).then(function () {
								$state.go($state.current, {}, { reload: true });
							})
						}
					},
					resolve: {
						stream: function ($stateParams) {
							return {
								shopId: $stateParams.shopId
							}
						}
					}
				})
		})
})();
