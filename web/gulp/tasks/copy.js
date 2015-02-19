'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = global.config;
var src         = config.app.src;
var build       = config.app.build;
var dist        = config.app.dist;

gulp.task('copy:build', function() {
  var files = [
    src.folder + '/**/*'
  ];
  return gulp.src( files )
    .pipe( gulp.dest( build.folder ) );
});


gulp.task('copy:dist', function() {
  var files = [
    src.folder + '/**/*.html',
    src.folder + '/**/assets/**/*'
  ];
  return gulp.src( files )
    .pipe( gulp.dest( dist.folder ));
});
