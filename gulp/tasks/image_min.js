'use strict';

var gulp = require('gulp');
var config = require('../config.js');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync');

gulp.task('imageMin', function() {
  return gulp.src(config.source.images + '**/*')
  .pipe(imagemin([
    pngquant({ quality: '65-80', speed: 1}),
    imagemin.jpegtran({
      quality: 85,
      progressive: true
    }),
    imagemin.svgo(),
    imagemin.gifsicle()
  ]))
	.pipe(gulp.dest(config.build.images))
	.pipe(browserSync.stream());
});
