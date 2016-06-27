var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')

var productionTask = function(cb) {
  global.production = true;
  gulpSequence('images', 'css')(cb);
}

gulp.task('production', productionTask)
