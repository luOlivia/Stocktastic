// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// }).listen(process.env.PORT, process.env.IP);

//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
// var http = require('http');
// var path = require('path');

// var async = require('async');
// var socketio = require('socket.io');
// var express = require('express');

// //
// // ## SimpleServer `SimpleServer(obj)`
// //
// // Creates a new instance of SimpleServer with the following options:
// //  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
// //
// var router = express();
// var server = http.createServer(router);
// var io = socketio.listen(server);

// router.use(express.static(path.resolve(__dirname, 'client')));
// var messages = [];
// var sockets = [];

// router.get("/", function(req, res){
//   res.send("hi!!")
//   //https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?api_key=_xxj62hU6DK8MaazUSh1
  
// });

// io.on('connection', function (socket) {
//     messages.forEach(function (data) {
//       socket.emit('message', data);
//     });

//     sockets.push(socket);

//     socket.on('disconnect', function () {
//       sockets.splice(sockets.indexOf(socket), 1);
//       updateRoster();
//     });

//     socket.on('message', function (msg) {
//       var text = String(msg || '');

//       if (!text)
//         return;

//       socket.get('name', function (err, name) {
//         var data = {
//           name: name,
//           text: text
//         };

//         broadcast('message', data);
//         messages.push(data);
//       });
//     });

//     socket.on('identify', function (name) {
//       socket.set('name', String(name || 'Anonymous'), function (err) {
//         updateRoster();
//       });
//     });
//   });

// function updateRoster() {
//   async.map(
//     sockets,
//     function (socket, callback) {
//       socket.get('name', callback);
//     },
//     function (err, names) {
//       broadcast('roster', names);
//     }
//   );
// }

// function broadcast(event, data) {
//   sockets.forEach(function (socket) {
//     socket.emit(event, data);
//   });
// }

// server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
//   var addr = server.address();
//   console.log("Chat server listening at", addr.address + ":" + addr.port);
// });
//test connectivity to local host
var express = require("express");
var server = express();

server.get('/hello.txt',function(req,res){
    res.send("hello world");
    
});
var server = server.listen(3000,function(){
    console.log("listening on port number %d",server.address().port)
})