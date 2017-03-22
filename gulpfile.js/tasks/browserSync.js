var browserSync       = require('browser-sync')
var config      = require('../config.json')
var gulp              = require('gulp')

var browserSyncTask = function(){
  setTimeout(function () {
    browserSync.init({
      proxy:config.browserSync.proxy,
      port: 3000,
      // open: false,
      ui: {
        port: 3001
      },
      notify: config.browserSync.notify
    });
  }, config.browserSync.startDelay );
}

gulp.task('browserSync', browserSyncTask);
