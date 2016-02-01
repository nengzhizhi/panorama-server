var socketIO = require('socket.io');
var PORT = 3003;

module.exports = function(app){
  var io = new socketIO();
  io.on('connection', function (socket) {

  })
  io.listen(PORT);
}
