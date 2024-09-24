const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');

gulp.task('styles', function compileSass() {
    return gulp.src('./src/scss/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
});

exports.default = gulp.parallel('styles');
exports.watch = function() {
    gulp.watch('./src/scss/*.scss', { ignoreInitial: false }, gulp.parallel('styles'));
    gulp.watch('./src/scss/partials/*.scss', { ignoreInitial:false }, gulp.parallel('styles'))
};