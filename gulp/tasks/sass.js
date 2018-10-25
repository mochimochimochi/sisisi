'use strict';

var gulp = require('gulp');
var config = require('../config.js');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var please = require('gulp-pleeease');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');

// sass
gulp.task('sass', function() {
  return gulp.src(config.source.stylesheets + '**/*.{sass,scss}')
  .pipe(sassGlob())
  .pipe(sass({
    outputStyle: ':expanded',
  })).on('error', sass.logError)
  .pipe(plumber())
  .pipe(please({
    minifier: true,
    mqpacker: true
  }))
  .pipe(gulp.dest(config.build.stylesheets))
  .pipe(browserSync.stream());
});
