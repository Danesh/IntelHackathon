'use strict';

module.exports = {
  angular: {
    prefix: 'gulp/angular.prefix',
    suffix: 'gulp/angular.suffix'
  },
  folders: {
    src:    './src',
    build:  './build',
    dist:   './dist'
  },
  files: {
    html:   '*.html',
    tpl:    '**/*.tpl',
    less:   '**/*.less',
    css:    '**/*.css',
    js:     '**/*.js',
    spec:   '**/*.spec-js'
  },
  vendor: {
    js: {
      files: [
        './components/cam/**',
        './bower_components/jquery/dist/jquery.js',
        './bower_components/angular/angular.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js',
        './bower_components/bootstrap/dist/js/bootstrap.js'
      ],
      target: 'vendor'
    },
    css: {
      files: [
        './bower_components/bootstrap/dist/css/bootstrap.min.css'
      ],
      target: 'vendor'
    },
    fonts: {
      files: [
        './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
        './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
        './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
        './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
      ],
      target: 'vendor/fonts'
    },
    polymer: {
      files: [
        './components/bower_components/**'
      ],
      target: 'vendor/polymer'
    }
  }
}
