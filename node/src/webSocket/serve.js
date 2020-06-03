var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
  // console.log(socket);
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});
server.listen(3000, () => {
  console.log('3000')
})