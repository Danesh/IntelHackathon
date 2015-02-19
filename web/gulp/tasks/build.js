'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['clean:build'], function() {
  return runSequence(
    'copy:build',
    'bootstrap:build:copy:js',
    'bootstrap:build:copy:css',
    'bootstrap:build:copy:fonts',
    'bootstrap:build:inject',
    'angular:build:copy:js',
    'angular:build:inject',
    'vendor:build:copy:js',
    'vendor:build:inject',
    'html2js:build',
    'less:build',
    'inject:build');
});
