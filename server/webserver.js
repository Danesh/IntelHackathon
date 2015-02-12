var sys = require('sys')
var run_cmd = require('child_process').exec;
var express = require('express');
var app = express();
app.use(express.json());

var uptime;

function forCors(response) {
  response.set('Access-Control-Allow-Origin', '*');
  response.set('Access-Control-Allow-Methods', 'HEAD,GET,PUT,OPTIONS');
  response.set('Access-Control-Max-Age', '300');
  response.set('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
  return response;
}

app.options('/ping', function(request, response) {
  response = forCors(response);
  response.send( 200 );
});

app.get('/ping', function(request, response) {
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
/// MONKEY BOT ENDPOINTS //
///////////////////////////

var logcat = require('./logcat.js').Logcat;

app.get('/logcat', function(req, res) {
  res.send(logcat.getLogcat());
})

app.listen(8080);
