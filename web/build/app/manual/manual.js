angular.module( 'cyngnIoT.manual', [])

.controller( 'ManualCtrl', ['$scope', '$httpProvider', '$http', function ManualCtrl( $scope, $httpProvider, $http ) {
  $httpProvider.defaults.useXDomain = true;
  $scope.tapscreen = function() {

    $http.post('http://10.65.23.129:8080/monkeyup');
  }
}]);
