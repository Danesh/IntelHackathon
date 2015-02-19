'use strict';

module.exports = {
  app: {
    src: {
      folder: './src'
    },
    build: {
      folder: './build'
    },
    dist: {
      folder: './dist'
    },
    prefix: 'gulp/angular.prefix',
    suffix: 'gulp/angular.suffix'
  },
  vendor: {
    angular: {
      js: {
        build: 'vendor',
        dist:  'vendor',
        files: [
        './bower_components/jquery/dist/jquery.js',
        './bower_components/angular/angular.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js' ],
      }
    },
    bootstrap: {
      js: {
        build: 'vendor',
        dist:  'vendor',
        files: ['./bower_components/bootstrap/dist/js/bootstrap.js']
      },
      css: {
        build: 'vendor',
        dist:  'vendor',
        files: ['./bower_components/bootstrap/dist/css/bootstrap.min.css']
      },
      fonts: {
        build: 'vendor/fonts',
        dist:  'vendor/fonts',
        files: [
        './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
        './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
        './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
        './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
        ]
      }
    },
    other: {
      js: {
        build: 'vendor',
        dist:  'vendor',
        files: [
        './components/camera/**',
        './components/socket/**'
        ]
      }
    }
  }
}
