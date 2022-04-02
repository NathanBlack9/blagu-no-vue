// import gulp from 'gulp'

const gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch("src/assets/styles/**/*.+(scss|sass)", gulp.parallel('css'));
  gulp.watch("src/assets/js/**/*.js", gulp.parallel('compressJs'));
  gulp.watch("src/assets/img/**/*+(png|svg|jpg)", gulp.parallel('compressImg'));
  // gulp.watch("src/html/*.html", gulp.parallel('html'),browserSync.reload);
});