module.exports = function(LiveStreamUrl){
  LiveStreamUrl.testRelation = function(cb){
    LiveStreamUrl.find({
      include: 'shop'
    }, cb);
  }

  LiveStreamUrl.remoteMethod('testRelation', {
    returns: {arg: 'result', type: 'object'},
    http: {path: '/testRelation', verb: 'post'}    
  });
}
