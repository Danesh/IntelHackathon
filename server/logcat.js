/*
   BSD License
   This code has been modified from its original source.
   Original source: https://www.npmjs.com/package/logcat
*/

var logcat = function () {};
var ADB_COMMAND = process.platform == 'darwin' ? 'adb' : '../hydra/adb/adb'

var util = require('util'),
	spawn = require('child_process').spawn,
	logcatcmd = spawn(ADB_COMMAND, ['logcat']);

logcat.prototype.getLogcat = function (){
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
	return json;
}

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
	});

};


logcatcmd.stdout.on('data', function(data){parseStdout(data);});
logcatcmd.stderr.on('data', function(data){parseStdout(data, 'error');});

logcatcmd.on('exit', function (code) {
	logcatcmd = spawn(ADB_COMMAND, ['logcat']);
	// do we need to re-set-up the above two stdio callbacks? appears no empirically but i am suspicious - sarbs
});

exports.logcat = new logcat();
