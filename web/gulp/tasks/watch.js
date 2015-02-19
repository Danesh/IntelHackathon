var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var runSequence  = require('run-sequence');

var config       = global.config;
var src          = config.app.src;
var build        = config.app.build;

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: build.folder
    }
  });
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('build-and-reload', function () {
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
    'less:build',
    'html2js:build',
    'inject:build',
    'reload');
});

// Default task to be run with `gulp`
gulp.task('watch', ['build', 'browser-sync'], function () {
    gulp.watch(src.folder + '/**/*', ['build-and-reload']);
});

gulp.task('reload', function() {
  return browserSync.reload();
});
