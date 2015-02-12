angular.module( 'cyngnIoT.config', [])

.factory( 'Config', function() {
  var config = {};
  config.ipaddress = "10.65.23.129";
  return config;
});
