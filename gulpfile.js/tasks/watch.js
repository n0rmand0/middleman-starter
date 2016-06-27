var gulp        = require('gulp')
var browserSync = require('browser-sync')
var watch       = require('gulp-watch')

var watchTask = function(){
  gulp.watch('./source/images/**', ['images']),
  gulp.watch('./source/stylesheets/**/*.{scss,css}', ['css']),
  gulp.watch('./source/**/*.{html,haml,js}', function(){
    setTimeout(function () {
      browserSync.reload();
    }, 1500);
  });
}

gulp.task('watch',['browserSync'], watchTask)
