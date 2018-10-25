'use strict';

var gulp = require('gulp');
var config = require('../config.js')

// copy
gulp.task('copy', function() {
	return gulp.src(config.source.root+'.htaccess')
	.pipe(gulp.dest(config.build.root));
});
