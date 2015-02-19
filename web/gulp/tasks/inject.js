'use strict';

var gulp        = require('gulp');
var inject      = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var config      = global.config;
var packageJson = global.packageJson;
var build       = config.app.build;
var dist        = config.app.dist;
var appFileName = packageJson.name + '-' + packageJson.version + '.js';
var options     = { relative: true };

gulp.task('inject:build', function() {
  var js = gulp.src( [ build.folder + '/app/**/*js', build.folder + '/common/**/*.js']).pipe(angularFilesort());

  return gulp.src( build.folder + '/index.html' )
    .pipe( inject( js, options ))
    .pipe( gulp.dest( build.folder ));
});

gulp.task('inject:dist', function() {
  return gulp.src( dist.folder + '/index.html' )
    .pipe( inject( gulp.src( dist.folder +'/js/**/*.js' ), options ))
    .pipe( inject( gulp.src( dist.folder + '/css/**/*.css' ), options ))
    .pipe( gulp.dest( dist.folder ));
});
