'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default_Task
gulp.task('default', function(callback) {
  runSequence('cleanBuild', 'clearCache', 'setIconFont',
	['include', 'sass', 'webpack', 'imageMin', 'copy', 'copy_js', 'file' ],
	'browserSync', 'watch', callback);
});

// 'imageCopy'イメージ圧縮なしコピーのみ
