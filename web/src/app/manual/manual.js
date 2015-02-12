angular.module( 'cyngnIoT.manual', [])

.controller( 'ManualCtrl', ['$scope', '$http', function ManualCtrl( $scope, $http ) {
  $scope.tapscreen = function() {
    $http.post('http://10.65.23.129:8080/monkeyup');
  }
}]);
