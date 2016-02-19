var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('bundle', ['copy'], bundle);
gulp.task('copy', copy);
gulp.task('live-server', liveServer);
gulp.task('serve', ['bundle', 'live-server'], serve);

function bundle() {
  return browserify({
    entries: 'app/main.jsx',
    debug: true
  })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));
}

function copy() {
  gulp.src(['app/*.css', 'bower_components/**/*.css'])
    .pipe(gulp.dest('./.tmp'));
}

function liveServer() {
  var server = new LiveServer('server/main.js');
  server.start();
}

function serve() {
  browserSync.init(null, {
    proxy: "http://localhost:7777",
    port: 9001
  });
}