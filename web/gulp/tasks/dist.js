'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dist',['clean:dist'], function() {
  return runSequence('concat', 'copy:dist', 'less:dist','inject:dist');
});
