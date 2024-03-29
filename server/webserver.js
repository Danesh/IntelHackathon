console.log('booting up!')
var sys = require('sys')
var run_cmd = require('child_process').exec;
var express = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var app = express();
app.use(express.json());
app.use(express.compress());
console.log(__dirname + '/web');
app.use(express.static(__dirname + '/web'));

var uptime;

function forCors(response) {
  response.set('Access-Control-Allow-Origin', '*');
  response.set('Access-Control-Allow-Methods', 'HEAD,GET,PUT,OPTIONS');
  response.set('Access-Control-Max-Age', '300');
  response.set('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
  return response;
}

console.log('here we go')
app.options('/ping', function(request, response) {
  response = forCors(response);
  response.send( 200 );
});

app.get('/ping', function(request, response) {
  console.log('servicing ping')
  var json = {
    msg: 'hello world'
  };
  response = forCors(response);
  response.type( 'application/json' );
  response.json( json );
});

app.options('/uptime', function(request, response) {
  response = forCors(response);
  response.send( 200 );
});

app.get('/uptime', function(request, response) {
  response = forCors(response);
  exec = run_cmd('uptime', function(error, stdout, stderr) {
    response.type( 'application/json' );
    response.json( { msg: stdout } );
    response.send( 200 );
  });
});

///////////////////////////
/// ADB ENDPOINTS        //
///////////////////////////

var adb = require('./adb.js');

app.get('/logcat', function(req, res) {
  res.send(adb.logcat.getLogcat());
})

app.get('/power', function(req, res) {
  adb.batteryStats.getChargeLevel(function(level) { res.send(level); });
})

io.on('connection', function (socket) {
  adb.logcat.onConnect(socket);
});

io.on('disconnect', function () {
     //This isn't working
     console.log("Socket disconnected");
     adb.logcat.onDisconnect();
 });

///////////////////////////
/// MONKEY BOT ENDPOINTS //
///////////////////////////

var monkey = require('../hydra/monkey/monkeybot.js').monkeybot;

// Script runner
app.post('/monkey/script', function(req, res) {
    //res.send(monkey.monkey_run_script() ? 200 : 500);
    // var scr = "monkey_fling_shit";
    // res.status(200)
    // res.setHeader('Content-Type': 'text/plain; charset=utf-8'
    // res.write("Sending script to monkey bot...<br/>")
    // monkey.monkey_run_script(
    //     scr,
    //     function(progress_str) { // Progress function
    //         res.write(progress_str + "<br/>")
    //     },
    //     function() { // done function
    //         res.end();
    //     })

  res.sendStatus(monkey.monkey_fling_shit() ? 200 : 500);
})

// Script runner that might work
app.post('/monkey/script2', function(req, res) {
    res.send(monkey.monkey_run_script() ? 200 : 500);
    var scr = req.body;
    res.status(200)
    res.setHeader('Content-Type': 'text/plain; charset=utf-8'
    res.write("Sending script to monkey bot...<br/>")
    monkey.monkey_run_script(
        scr,
        function(progress_str) { // Progress function
            res.write(progress_str + "<br/>")
        },
        function() { // done function
            res.end();
        })
})


// Individual commands
app.post('/monkey/start', function(req, res) {
  res.sendStatus(monkey.monkey_start() ? 200 : 500);
})

app.post('/monkey/stop', function(req, res) {
  res.sendStatus(monkey.monkey_stop() ? 200 : 500);
})

app.post('/monkey/down', function(req, res) {
  res.sendStatus(monkey.monkey_down() ? 200 : 500);
})

app.post('/monkey/up', function(req, res) {
  res.sendStatus(monkey.monkey_up() ? 200 : 500);
})

app.post('/monkey/tap', function(req, res) {
  res.sendStatus(monkey.monkey_tap() ? 200 : 500);
})

app.post('/monkey/rotate', function(req, res) {
  res.sendStatus(monkey.monkey_rotate() ? 200 : 500);
})

app.post('/monkey/moveto', function(req, res) {
  res.sendStatus(monkey.monkey_move_to() ? 200 : 500);
})

app.get('/monkey/stats', function(req, res) {
  res.send(monkey.monkey_get_stats());
})

app.post('/monkey/flingshit', function(req, res) {
  res.sendStatus(monkey.monkey_fling_shit() ? 200 : 500);
})

app.listen(8080);
server.listen(8081);

console.log('up and running!')
