const gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

// SASS
gulp.task('sass', () => {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            // outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
});

// BROWSER SYNC
gulp.task('browserSync', () => {
    browserSync.init({
        server: './public',
        notify: false,
        open: true
    });
});

// gulp.task('printName', () => {
//     console.log('My name');
// });

// gulp.task('printAge', () => {
//     console.log('I am 20');
// });

// Run tasks and set gulp watch
gulp.task('default', ['sass', 'browserSync'], () => {
    gulp.watch('./src/scss/**/*', ['sass']);
});