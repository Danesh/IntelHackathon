'use strict';

var gulp        = require('gulp');
var less        = require('gulp-less');
var concat      = require('gulp-concat');
var path        = require('path');
var config      = global.config;
var packageJson = global.packageJson;
var src         = config.app.src;
var build       = config.app.build;
var dist        = config.app.dist;

gulp.task('less:build', function() {
  return gulp.src( src.folder + '/**/*.less' )
    .pipe( less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe( gulp.dest( build.folder ));
});

gulp.task('less:dist', function() {
  var cssFile = packageJson.name + '-' +  packageJson.version + '.css';
  return gulp.src( src.folder + '/**/*.less' )
    .pipe( less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe( concat( cssFile ))
    .pipe( gulp.dest( dist.folder + '/css' ));
});
