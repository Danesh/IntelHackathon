var io = require('socket.io-client');
var socket = io.connect('http://128.95.80.175:8080');
socket.on('logcat', function (data) {
	console.log(data);
});
