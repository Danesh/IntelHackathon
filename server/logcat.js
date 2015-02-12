/*
   BSD License
   This code has been modified from its original source.
   Original source: https://www.npmjs.com/package/logcat
*/

var ADB_COMMAND = process.platform == 'darwin' ? 'adb' : '../hydra/adb/adb';

var util = require('util'),
	spawn = require('child_process').spawn;

exports.logcat = function() {
	var MAX_LINES = 1024;
	var first = 0;
	var last = 0;
	var lineBuffer = new Array();
	var socket = null;

	var getLogcat = function() {
		var buf = new Array();
		while(first != last) {
			 buf.push(lineBuffer[first]);
			 first++;
			 if (first == MAX_LINES - 1) {
				first = 0;
			}
		}

		json = JSON.stringify(buf);
		return json;
	}

	var parseStdout = function(data, _class) {
		data.toString().split('\n').forEach(function(line) {
			if (line != '') {
				lineBuffer[last] = line;
				last++;

				if (last == MAX_LINES) {
					console.log("Overflow");
					last = 0;
				}

				if (socket != null) {
					socket.emit('logcat', { msg: line });
				}
			}
		});
	};

	var onConnect = function(asocket) {
		console.log("LOGCAT: socket connected");
		socket = asocket;
	}

	var onDisconnect = function() {
		socket = null;
	}


	var logcatcmd = spawn(ADB_COMMAND, ['logcat']);
	logcatcmd.stdout.on('data', function(data){parseStdout(data);});
	logcatcmd.stderr.on('data', function(data){parseStdout(data, 'error');});

	logcatcmd.on('exit', function (code) {
		logcatcmd = spawn(ADB_COMMAND, ['logcat']);
		// do we need to re-set-up the above two stdio callbacks? appears no empirically but i am suspicious - sarbs
	});

	return {
		getLogcat: getLogcat,
		parseStdout: parseStdout,
		onConnect: onConnect,
		onDisconnect: onDisconnect
	}
}();
