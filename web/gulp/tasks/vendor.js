'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var inject      = require('gulp-inject');
var config      = global.config;
var other       = config.vendor.other;
var build       = config.app.build;
var dist        = config.app.dist;

// copies js files to build
gulp.task('vendor:build:copy:js', function() {
  return gulp.src( other.js.files )
    .pipe( gulp.dest( build.folder + '/' + other.js.build ) );
});
// injects the js to the index
gulp.task('vendor:build:inject', function() {
  var vendorJs = gulp.src( getVendorFiles(other.js.files, build.folder));
  var options = { name: 'vendor', relative: true }
  return gulp.src( build.folder + '/index.html' )
    .pipe( inject( vendorJs, options ))
    .pipe( gulp.dest( build.folder ));
});
// copies js files to dist
gulp.task('vendor:dist:copy:js', function() {
  return gulp.src( other.js.files )
    .pipe( gulp.dest( dist.folder + '/' + other.js.dist ) );
});
// injects the js to the index
gulp.task('vendor:dist:inject', function() {
  var vendorJs = gulp.src( getVendorFiles(other.js.files, dist.folder));
  var options = { name: 'vendor', relative: true }
  return gulp.src( dist.folder + '/index.html' )
  .pipe( inject( vendorJs, options ))
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
