'use strict';

var config = global.config;
var gulp   = require('gulp');
var del    = require('del');

gulp.task('clean:build', function(cb) {
  return del([ config.folders.build ], cb);
});
gulp.task('clean:dist', function(cb) {
  return del([ config.folders.dist ], cb);
});
