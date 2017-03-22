var config      = require('../config.json')
var cssnano      = require('gulp-cssnano')
var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var browserSync  = require('browser-sync')
var sass         = require('gulp-sass')
var sourcemaps   = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var notify = require("gulp-notify")

var cssTask = function () {
  return gulp.src(config.css.src)
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .pipe(sass())
    .on("error", notify.onError("Error: <%= error.message %>"))
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulpif(!global.production, sourcemaps.write({identityMap: true})))
    .pipe(gulpif(global.production, cssnano({autoprefixer: false})))
    .pipe(gulp.dest(config.css.dest))
    .pipe(browserSync.stream())
}

gulp.task('css', cssTask)
