angular.module( 'cyngnIoT.header', [])

.controller( 'HeaderCtrl', ['$scope', '$location', function HeaderCtrl( $scope, $location ) {
  $scope.path = $location.path().replace('/', '');
  $scope.isActive = function( path ) {
    if ($scope.path === path) {
      return 'active';
    }
    else {
      return 'none';
    }
  }
}]);
