var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('server', function() {
  connect.server({
    livereload: true,
    middleware: function(connect, opt) {
      return [ (function() {
        var url = require('url');
        var proxy = require('proxy-middleware');
        var options = url.parse('http://topka.cn/');
        options.route = '/api';
        return proxy(options);
      })()];
    }
  });
});


gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('./*.html', ['html']);
});
 
gulp.task('default', ['server','watch']);
