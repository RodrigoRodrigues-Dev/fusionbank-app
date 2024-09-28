const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const obfuscate = require('gulp-obfuscate');
const uglify = require('gulp-uglify');

gulp.task('styles', function compileSass() {
    return gulp.src('./src/scss/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('scripts', function complimeJavaScript() {
    return gulp.src('./src/scripts/main.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./dist/scripts'))
})

exports.default = gulp.parallel('styles', 'scripts');
exports.watch = function() {
    gulp.watch('./src/scss/*.scss', { ignoreInitial: false }, gulp.parallel('styles'));
    gulp.watch('./src/scss/partials/*.scss', { ignoreInitial:false }, gulp.parallel('styles'));
    gulp.watch('./src/scripts/main.js', { ignoreInitial:false }, gulp.parallel('scripts'))
};