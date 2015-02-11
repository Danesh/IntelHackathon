'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = global.config;
var folders     = config.folders;
var files       = config.files;
var vendor      = config.vendor;

gulp.task('copy:build', function() {
  return runSequence([
    'copy:build:src',
    'copy:build:vendorJs',
    'copy:build:vendorCss',
    'copy:build:vendorFonts',
    'copy:build:assets']);
});
gulp.task('copy:build:src', function() {
  files = [
    folders.src + '/' + files.html,
    folders.src + '/' + files.js,
  ];
  return gulp.src( files )
    .pipe( gulp.dest( folders.build ) );
});
gulp.task('copy:build:vendorJs', function() {
  return gulp.src( vendor.js.files )
    .pipe( gulp.dest( folders.build + '/' + vendor.js.target ) );
});
gulp.task('copy:build:vendorCss', function() {
  return gulp.src( vendor.css.files )
    .pipe( gulp.dest( folders.build + '/' + vendor.css.target ) );
});
gulp.task('copy:build:vendorFonts', function() {
  return gulp.src( vendor.fonts.files )
    .pipe( gulp.dest( folders.build + '/' + vendor.fonts.target ) );
});
gulp.task('copy:build:assets', function() {
  return gulp.src( folders.src + '/assets/**' )
    .pipe( gulp.dest( folders.build + '/assets') );
});

gulp.task('copy:dist', function() {
   return runSequence([
    'copy:dist:src',
    'copy:dist:vendorJs',
    'copy:dist:vendorCss',
    'copy:dist:vendorFonts']);
});

gulp.task('copy:dist:src', function() {
  files = [
    folders.src + '/' + files.html
  ];
   return gulp.src( files )
    .pipe( gulp.dest( folders.dist ) );
});
gulp.task('copy:dist:vendorJs', function() {
   return gulp.src( vendor.js.files )
    .pipe( gulp.dest( folders.dist + '/' + vendor.js.target ) );
});
gulp.task('copy:dist:vendorCss', function() {
   return gulp.src( vendor.css.files )
    .pipe( gulp.dest( folders.dist + '/' + vendor.css.target ) );
});
gulp.task('copy:dist:vendorFonts', function() {
   return gulp.src( vendor.fonts.files )
    .pipe( gulp.dest( folders.dist + '/' + vendor.fonts.target ) );
})
