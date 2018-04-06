const gulp = require('gulp'),
      watch = require('gulp-watch'),
      prefixer = require('gulp-autoprefixer'),
      sass = require('gulp-ruby-sass'),
      uglify = require('gulp-uglify');

gulp.task('HTML', function() {
  gulp.src('src/index.html')
  .pipe(gulp.dest('build/'))
});

gulp.task('styles', function() {
  sass('src/scss/*.sass', {style: 'expanded'})
  .on('error', sass.logError)
  .pipe(prefixer('last 2 version'))
  .pipe(gulp.dest('build/css'))
});

gulp.task('scripts', function() {
  gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
})

gulp.task('watch', function() {
  gulp.watch('src/scss/*.sass', ['styles']);
  gulp.watch('src/js/*.js', ['scripts']);
})

gulp.task('default', ['styles', 'scripts', 'watch'])