// import gulp from 'gulp'

const gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch("src/assets/styles/**/*.+(scss|sass)", gulp.parallel('css'));
  // gulp.watch("src/html/*.html", gulp.parallel('html'),browserSync.reload);
  // gulp.watch("src/js/**/*.js", gulp.parallel('compressJs'),browserSync.reload);
  // gulp.watch("src/img/**/*+(png|svg|jpg)", gulp.parallel('compressImg'),browserSync.reload);
});