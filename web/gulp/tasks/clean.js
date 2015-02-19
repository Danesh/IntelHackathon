'use strict';


var gulp   = require('gulp');
var del    = require('del');
var config = global.config;
var build  = config.app.build;
var dist   = config.app.dist;

gulp.task('clean:build', function(cb) {
  return del([ build.folder ], cb);
});

gulp.task('clean:dist', function(cb) {
  return del([ dist.folder ], cb);
});
