var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')

var productionTask = function(cb) {
  global.production = true;
  gulpSequence('css')(cb);
}

gulp.task('production', productionTask)

module.exports = productionTask
