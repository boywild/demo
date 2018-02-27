//引入gulp
var gulp = require('gulp');

//引入webserver插件
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./index.html')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
gulp.task('watch', function() {
  gulp.watch('./*.html', ['webserver']);
})
gulp.task('default',['webserver'])