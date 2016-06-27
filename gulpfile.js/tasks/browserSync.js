var browserSync       = require('browser-sync')
var gulp              = require('gulp')

var browserSyncTask = function(){
  setTimeout(function () {
    browserSync.init({
      proxy: "http://localhost:4567",
      port: 8000,
      // open: false,
      ui: {
        port: 8001
      }
    });
  }, 3000);
}

gulp.task('browserSync', browserSyncTask);
