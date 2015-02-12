var io = require('socket.io-client');
var socket = io.connect('http://localhost:8080');
socket.on('logcat', function (data) {
	console.log(data);
});
