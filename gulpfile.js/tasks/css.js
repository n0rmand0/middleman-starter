var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var browserSync  = require('browser-sync')
var sass         = require('gulp-sass')
var sourcemaps   = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var notify = require("gulp-notify")

var paths = {
  src: "./source/stylesheets/**/*.{scss,css}",
  dest: "./.tmp/stylesheets/"
}

var cssTask = function () {
  return gulp.src(paths.src)
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .pipe(sass())
    .on("error", notify.onError("Error: <%= error.message %>"))
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulpif(!global.production, sourcemaps.write({identityMap: true})))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('css', cssTask)
