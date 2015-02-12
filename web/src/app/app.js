angular.module( 'cyngnIoT', [
  'common-templates',
  'cyngnIoT.home',
  'cyngnIoT.header',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
  $urlRouterProvider.otherwise( '/home' );

  $stateProvider
  .state('home', {
    url: '/home',
    views: {
      'header': {
        templateUrl: 'app/header/header.tpl',
        controller: 'HeaderCtrl'
      },
      'main': {
        templateUrl: 'app/home/home.tpl',
        controller: 'HomeCtrl'
      },
      'footer': {
        templateUrl: 'app/footer/footer.tpl'
      }
    },
    data: {
      pageTitle: ''
    }
  })
  .state('camera', {
    url: '/camera',
    views: {
      'header': {
        templateUrl: 'app/header/header.tpl',
        controller: 'HeaderCtrl'
      },
      'main': {
        templateUrl: 'app/camera/camera.tpl'
      },
      'footer': {
        templateUrl: 'app/footer/footer.tpl'
      }
    },
    data: {
      pageTitle: ''
    }
  })
  .state('adb', {
    url: '/adb',
    views: {
      'header': {
        templateUrl: 'app/header/header.tpl',
        controller: 'HeaderCtrl'
      },
      'main': {
        templateUrl: 'app/adb/adb.tpl'
      },
      'footer': {
        templateUrl: 'app/footer/footer.tpl'
      }
    },
    data: {
      pageTitle: ''
    }
  })
  .state('script', {
    url: '/script',
    views: {
      'header': {
        templateUrl: 'app/header/header.tpl',
        controller: 'HeaderCtrl'
      },
      'main': {
        templateUrl: 'app/script/script.tpl'
      },
      'footer': {
        templateUrl: 'app/footer/footer.tpl'
      }
    },
    data: {
      pageTitle: ''
    }
  })
  .state('manual', {
    url: '/manual',
    views: {
      'header': {
        templateUrl: 'app/header/header.tpl',
        controller: 'HeaderCtrl'
      },
      'main': {
        templateUrl: 'app/manual/manual.tpl'
      },
      'footer': {
        templateUrl: 'app/footer/footer.tpl'
      }
    },
    data: {
      pageTitle: ''
    }
  });
  $locationProvider
    .html5Mode(false)
    .hashPrefix('!');
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + 'Cyanogen @ IoT Hackathon' ;
    }
  });
})

;
