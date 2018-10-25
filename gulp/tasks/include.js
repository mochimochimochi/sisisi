'use strict';

var gulp = require('gulp');
var config = require('../config.js');
// var fileInclude = require('gulp-file-include');
var ssi = require('gulp-ssi');
var browserSync = require('browser-sync');

// include
// gulp.task('include', function() {
//   return gulp.src([config.source.root + '**/*.html'])
// 	.pipe(fileInclude({
//     prefix: '@@',
//     basepath: config.source.root
//   }))
// 	.pipe(gulp.dest(config.build.root))
// 	.pipe(browserSync.stream());
// });

// include
gulp.task('include', function() {
  return gulp.src([config.source.root + '**/*.html'])
	.pipe(ssi({
    root: config.source.root
  }))
	.pipe(gulp.dest(config.build.root))
	.pipe(browserSync.stream());
});
