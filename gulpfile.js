const gulp = require('gulp');
sass = require('gulp-sass');
autoprefixer = require('gulp-autoprefixer');


/* Compile Main .scss Files */
gulp.task('compileMain', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', function () {
    gulp.watch('./scss/**/*.scss', gulp.parallel([
        'compileMain'
    ]));
});