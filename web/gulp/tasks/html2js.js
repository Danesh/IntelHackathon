'use strict';

var gulp       = require('gulp');
var html2js    = require('gulp-ng-html2js');
var concat     = require('gulp-concat');
var config     = global.config;
var src        = config.app.src;
var build      = config.app.build;
var dist       = config.app.dist;
var outputName = 'common-templates.js'

gulp.task('html2js:build', function(){
  return gulp.src( src.folder + '/**/*.tpl' )
    .pipe( html2js( {
      moduleName: 'common-templates'
    }))
    .pipe( concat( outputName ) )
    .pipe( gulp.dest( build.folder + '/app' ));
});


gulp.task('html2js:dist', function(){
  return gulp.src( src.folder + '/**/*.tpl' )
  .pipe( html2js( {
    moduleName: 'common-templates'
  }))
  .pipe( concat( outputName ) )
  .pipe( gulp.dest( dist.folder + '/js' ));
});
