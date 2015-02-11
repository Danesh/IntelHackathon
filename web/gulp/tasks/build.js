'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['clean:build'], function() {
  return runSequence('copy:build', 'less:build', 'html2js:build', 'inject:build');
});
