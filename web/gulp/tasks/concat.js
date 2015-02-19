'use strict';

var gulp          = require('gulp');
var concat        = require('gulp-concat');
var config        = global.config;
var packageJson   = global.packageJson;
var src           = config.app.src;
var dist          = config.app.dist;
var angularPrefix = config.app.prefix;
var angularSuffix = config.app.suffix;
var angularJsFile = packageJson.name + '-' +
                    packageJson.version + '.js';

gulp.task('concat', function(){
  return gulp.src( [ angularPrefix,
      src.folder + '/app/**/*.js',
      src.folder + '/common/**/*.js',
      angularSuffix ] )
    .pipe( concat( angularJsFile ) )
    .pipe( gulp.dest( dist.folder + '/js') );
});
