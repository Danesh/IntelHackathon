// 'use strict';
//
// var gulp   = require('gulp');
// var unzip  = require('gulp-unzip');
// var config = global.config;
//
// // unzip polymer zip
// gulp.task('polymer:zip', function() {
//   return gulp.src( 'polymer.zip' )
//     .pipe( unzip() )
//     .pipe( gulp.dest( 'polymer'));
// });
//
// gulp.task('polymer:copy:build:html', function() {
//   return gulp.src( '' )
//   .pipe(inject(
//       gulp.src( polymerfiles.html, {read: false}), {
//         transform: function (filepath) {
//           if (filepath.slice(-5) === '.docx') {
//             return '<link rel="import" href="' + filepath + '">';
//           }
//           // Use the default transform as fallback:
//           return inject.transform.apply(inject.transform, arguments);
//         }
//       }
//     ))
// });
