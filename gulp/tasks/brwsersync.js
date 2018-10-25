'use strict';

var gulp = require('gulp');
var config = require('../config.js');
var browserSync = require('browser-sync');

// browserSync
gulp.task('browserSync', function() {
	return browserSync({
		server: {
			baseDir: './build/'
		},
		startPath: config.startPath.root
	});
});
