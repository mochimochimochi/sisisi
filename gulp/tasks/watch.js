'use strict';

var gulp = require('gulp');
var config = require('../config.js');

// watch
gulp.task('watch', function() {
	// image
  gulp.watch(config.source.images + '**/*', function() {
     gulp.start('imageMin');
  });
	// iconfont
  gulp.watch(config.source.icons + '**/*', function() {
     gulp.start('setIconFont');
  });
	// HTML
  gulp.watch(['*.html', '**/*.html'], function() {
     gulp.start('include');
  });
	// sass
  gulp.watch(config.source.stylesheets + '**/*.{sass,scss}', function() {
     gulp.start('sass');
  });
	// JS
   gulp.watch(config.source.javascripts + '**/*.js', function() {
     gulp.start('webpack');
  });
  // file_copy
  gulp.watch(config.source.file + '**/*', function() {
    gulp.start('file');
  });
});
