(function(){
	'use strict';
	angular
		.module('com.module.shop')
		.service('ShopService', function (Shop) {
			this.getShop = function (id) {
				return Shop.findById({ id: id }).$promise;
			}

			this.upsertShop = function (shop) {
				return Shop.upsert(shop).$promise
					.then(function () {

					})
					.catch( function (err) {

					})
			}

			this.getShopStreams= function (id) {
				return Shop.liveStreams({ id: id }).$promise;
			}

			this.getStreamFormFields = function () {
				return [
					{
						key: 'type',
						type: 'input',
						templateOptions: {
							label: '码流类型',
							required: true
						}
					}
					, {
						key: 'value',
						type: 'input',
						templateOptions: {
							label: '码流值',
							required: true
						}
					}
				]
			}


			this.getFormFields = function () {
				return [
					{
						key: 'name',
						type: 'input',
						templateOptions: {
							label: '店铺名称',
							required: true
						}
						// ,expressionProperties: {
						// 	'templateOptions.disabled': function () {
						// 		return true;
						// 	}
						// }
					}
				];
			}
		})
})();
