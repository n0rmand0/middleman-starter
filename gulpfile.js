var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('images', function() {
    return gulp.src('./source/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}, {removeStyleElement: true }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./source/images'));
});

gulp.task('default', ["images"]);
