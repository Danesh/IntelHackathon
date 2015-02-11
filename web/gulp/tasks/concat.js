'use strict';

var config        = global.config;
var gulp          = require('gulp');
var concat        = require('gulp-concat');
var foldersSrc    = config.folders.build;
var foldersDist   = config.folders.dist;
var filesJs       = config.files.js;
var angularPrefix = config.angular.prefix;
var angularSuffix = config.angular.suffix;
var packageJson   = global.packageJson;
var angularJs     = packageJson.name + '-' + packageJson.version + '.js';

gulp.task('concat', function(){
  return gulp.src( [ angularPrefix,
              foldersSrc + '/app/' + filesJs,
              foldersSrc + '/common/' + filesJs,
              angularSuffix ] )
    .pipe( concat( angularJs ) )
    .pipe( gulp.dest( foldersDist ) );
});
