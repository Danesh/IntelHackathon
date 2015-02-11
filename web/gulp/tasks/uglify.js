'use strict';
  var gulp        = require('gulp');
  var concat      = require('gulp-concat');
  var uglify      = require('gulp-uglify');
  var config      = global.config;
  var folderJs    = config.folders.build;
  var filesJs     = config.files.js;
  var folderDist  = config.folders.dist;
  var packageJson = global.packageJson;
  var outputName  = packageJson.name + '-' +  packageJson.version + '.js';
  var files = [
    folderJs + '/' + filesJs
    ];
gulp.task('uglify',function(){
  return gulp.src( files )
    // .pipe( uglify() )
    .pipe( concat(outputName) )
    .pipe( gulp.dest(folderDist + '/app') );
});
