'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var inject      = require('gulp-inject');
var config      = global.config;
var angular     = config.vendor.angular;
var build       = config.app.build;
var dist        = config.app.dist;

// copies js files to build
gulp.task('angular:build:copy:js', function() {
  return gulp.src( angular.js.files )
    .pipe( gulp.dest( build.folder + '/' + angular.js.build ) );
});
// injects the js to the index
gulp.task('angular:build:inject', function() {
  var angularJs = gulp.src(getVendorFiles(angular.js.files, build.folder));
  var options = { name: 'angular', relative: true }
  return gulp.src( build.folder + '/index.html' )
    .pipe( inject( angularJs, options ))
    .pipe( gulp.dest( build.folder ));
});
// copies js files to dist
gulp.task('angular:dist:copy:js', function() {
  return gulp.src( angular.js.files )
    .pipe( gulp.dest( dist.folder + '/' + angular.js.dist ) );
});
// injects the js to the index
gulp.task('angular:dist:inject', function() {
  var angularJs = gulp.src(getVendorFiles(angular.js.files, dist.folder));
  var options = { name: 'angular', relative: true }
  return gulp.src( dist.folder + '/index.html' )
    .pipe( inject( angularJs, options ))
    .pipe( gulp.dest( dist.folder ));
});

var getVendorFiles = function(inputFiles, folder) {
  var files = [];
  for (var i = 0; i < inputFiles.length; i++) {
    var file = inputFiles[i];
    var fileSplit = file.split('/');
    files.push( folder + '/vendor/' + fileSplit[fileSplit.length - 1]);
  }
  return files;
}
