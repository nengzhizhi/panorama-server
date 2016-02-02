var async = require('async');
module.exports = function (app) {
  var loopback = require('loopback');

  var LiveStreamUrl = app.models.LiveStreamUrl;
  var Shop = app.models.Shop;

  var shops = [
    { name: '大悦城' }
  ]

  // if (!!Shop && !!LiveStreamUrl) {
  //   shops.forEach(function (shop) {
  //     Shop.findOrCreate({
  //       where: { name: shop.name }
  //     }, shop, function (err, createdShop, created) {
  //       console.log(err, createdShop);
  //       var url = {};
  //       url.shopId = createdShop.id;
  //       url.urls = [{
  //         type: 'flv',
  //         value: 'http://xx.flv'
  //       }];
  //
  //       LiveStreamUrl.create(url, function (err, instance) {
  //         console.log(err, instance);
  //       });
  //     })
  //   })
  // }

  // async.waterfall([
  //   function (next) {
  //     Shop.find({
  //       where: { name: '大悦城' }
  //     }, next);
  //   }, function (shop, next) {
  //     console.log(shop);
  //
  //     LiveStreamUrl.find({ "filter": {
  //       "where": { "shopId": shop.id },
  //       "include": { "relation": "shop" }
  //     }}, next)
  //   }
  // ], function (err, result) {
  //   console.log(err, result);
  // })

  // Shop.findOne({
  //     where: { name: '大悦城' }
  //   },
  //   function (err, result) {
  //     console.log(err, result);
  //   }
  // )

  // LiveStreamUrl.find({include: 'shop'}, function (err, result) {
  //   console.log(err, result);
  // })
}
