var async = require('async');

module.exports = function (Shop) {
  Shop.addStream = function(shopId, type, value, cb){
    async.waterfall([
      function findShop(next){
        Shop.findOne({
          where: { id: shopId }
        }, next);
      }, function (shop, next) {
        shop.liveStreams.create({
          type: type,
          value: value
        })
      }
    ], function (err, result) {
      cb(err, result);
    });
  }

  Shop.remoteMethod('addStream', {
    accepts: [
      { arg: 'shopId', type: 'string'},
      { arg: 'type', type: 'string' },
      { arg: 'value', type: 'string'}
    ],
    returns: {arg: 'result', type: 'object'},
    http: {path: '/addStream', verb: 'post'}
  })

//----------------------------------------------------------

  Shop.getStream = function(shopId, name, cb){
    Shop.findOne({
      where: {
        or: [{ id: shopId }, { name: name }]
      }, include: 'liveStream'
    }, function (err, shop) {
      cb(err, shop);
    })
  }

  Shop.remoteMethod('getStream', {
    accepts: [{
      arg: 'shopId', type: 'string',
    }, {
      arg: 'name', type: 'string'
    }],
    returns: {arg: 'result', type: 'object'},
    http: {path: '/getStream', verb: 'get'}
  })
}
