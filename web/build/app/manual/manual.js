angular.module( 'cyngnIoT.manual', [])

.controller( 'ManualCtrl', ['$scope', '$http', function ManualCtrl( $scope, $http ) {
  $scope.tapscreen = function() {
    $http.post('http://10.65.23.129:8080/monkeyup');
  }

  $scope.postMoveTo = function() {
      var x = $('#x-pos').text();
      var y = $('#y-pos').text();
      // Simple POST request example (passing data) :
      $http.post('/monkey/moveto', {"x": x, "y": y}).
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
            alert("Moved to: " + x + ", " + y);
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
            alert("Move failed.");
        });
  };
}]);
