'use strict';

var gulp = require('gulp');
var config = require('../config.js');
var browserSync = require('browser-sync');

// copy_js
gulp.task('copy_js', function() {
	return gulp.src(config.source.jscopy + '**/*')
	.pipe(gulp.dest(config.build.javascripts))
	.pipe(browserSync.stream());
});
