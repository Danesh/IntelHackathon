var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var runSequence  = require('run-sequence');
var config       = global.config;
var foldersSrc   = config.folders.src;
var foldersBuild = config.folders.build;
var files        = "**/*";
var filesJs      = config.files.js;
var filesLess    = config.files.less;
var filesHtml    = config.files.html;
var filesTpl     = config.files.tpl;

gulp.task('watch:build', function() {
  runSequence('clean:build', 'copy:build', 'less:build', 'html2js:build', 'inject:build', 'browserSync:build');
  return gulp.watch(foldersSrc + '/' + files, function() {
    runSequence('clean:build', 'copy:build', 'less:build', 'html2js:build', 'inject:build');
  });

});

gulp.task('browserSync:build', function() {
  browserSync({
    server: {
      baseDir: foldersBuild
    }
  });
  return browserSync.reload();
});
