'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

// setIconFont
gulp.task('setIconFont', function(callback) {
	runSequence('iconFont', 'copyIconFontCSS', callback);
});
