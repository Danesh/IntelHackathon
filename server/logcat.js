/*
   BSD License
   This code has been modified from its original source.
   Original source: https://www.npmjs.com/package/logcat
*/

var ADB_COMMAND = process.platform == 'darwin' ? 'adb' : '../hydra/adb/adb'

var util = require('util'),
	colors = require('colors'),
	app = require('express.io')(),
	spawn = require('child_process').spawn,
	state = {
		'success': ['success', 'D\/DroidGap', 'D\/CordovaLog'],
		'error': ['error', 'E\/'],
		'warning': ['warning', 'W\/Web Console'],
		'info': ['info']
	},
	logcat = spawn(ADB_COMMAND, ['logcat']);
	app.listen(8080);

app.http().io();
app.get('/', function(req, res) {res.sendfile(__dirname + '/public/client.html');});
app.get('/js/jquery-1.9.1.min.js', function(req, res) {res.sendfile(__dirname + '/public/js/jquery-1.9.1.min.js');});
app.get('/js/bootstrap.min.js', function(req, res) {res.sendfile(__dirname + '/public/js/bootstrap.min.js');});
app.get('/css/bootstrap.min.css', function(req, res) {res.sendfile(__dirname + '/public/css/bootstrap.min.css');});

function forCors(response) {
	response.set('Access-Control-Allow-Origin', '*');
	response.set('Access-Control-Allow-Methods', 'HEAD,GET,PUT,OPTIONS');
	response.set('Access-Control-Max-Age', '300');
	response.set('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
	return response;
}

app.get('/logcat', function(request, response) {
	var buf = new Array();
	while(first != last) {
		 buf.push(lineBuffer[first]);
		 first++;
		 if (first == MAX_LINES - 1) {
			first = 0;
		}
	}
	/*var json = {
		msg: 'hello world'
	}; */


	json = JSON.stringify(buf);
	response.type( 'application/json' );
	response.json( json );
});



var MAX_LINES = 1024;
var first = 0;
var last = 0;
var lineBuffer = new Array();


var parseStdout = function(data, _class) {
	data.toString().split('\n').forEach(function(line) {

		lineBuffer[last] = line;
		last++;

		if (last == MAX_LINES) {
			console.log("Overflow");
			last = 0;
		}



		//console.log(line);


		/*
		if(line != '') {
			var type = ['info'];
			if(state.hasOwnProperty(_class)) {
				type.push(_class);
			} else {
				Object.keys(state).forEach(function(k) {
					if(util.isArray(state[k])) {
						state[k].forEach(function(rx) {
							var r = new RegExp(rx);
							if(r.test(line)) {
								type.push(k);
							}
						});
					}
				});
			}

			if(type.indexOf('error') >= 0) {
				console.log(line.red.bold);
				app.io.broadcast('line', {'line': line, 'type': 'error'});
			} else if(type.indexOf('warning') >= 0) {
				console.log(line.yellow.bold);
				app.io.broadcast('line', {'line': line, 'type': 'warning'});
			} else if(type.indexOf('success') >= 0) {
				console.log(line.green.bold);
				app.io.broadcast('line', {'line': line, 'type': 'success'});
			} else {
				console.log(line.blue.bold);
				app.io.broadcast('line', {'line': line, 'type': type[0]});
			}
		}
		*/
	});

};


logcat.stdout.on('data', function(data){parseStdout(data);});

logcat.stderr.on('data', function(data){parseStdout(data, 'error');});

logcat.on('exit', function (code) {
	logcat = spawn(ADB_COMMAND, ['logcat']);
});

module.exports = app;
