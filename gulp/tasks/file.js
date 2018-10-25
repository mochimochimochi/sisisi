'use strict';

var gulp = require('gulp');
var config = require('../config.js');
var browserSync = require('browser-sync');

// file_copy
gulp.task('file', function() {
	return gulp.src(config.source.file + '**/*')
	.pipe(gulp.dest(config.build.file))
	.pipe(browserSync.stream());
});
