angular.module( 'cyngnIoT.manual', [])

.controller( 'ManualCtrl', ['$scope', '$location', '$http', function ManualCtrl( $scope, $location,
$http) {
  $scope.path = $location.path().replace('/', '');
  $scope.isActive = function( path ) {
    if ($scope.path === path) {
      return 'active';
    }
    else {
      return '';
    }
  }

  $scope.tapscreen = function() {
    $http.post('/monkey/tap');
  }

  $scope.flingShit = function() {
    $http.post('/monkey/flingshit');
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
