'use strict';

var gulp = require('gulp');
var config = require('../config.js');
var browserSync = require('browser-sync');

gulp.task('imageCopy', function() {
  return gulp.src(config.source.images + '**/*')
	.pipe(gulp.dest(config.build.images))
	.pipe(browserSync.stream());
});
