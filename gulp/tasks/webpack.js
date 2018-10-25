'use strict';

var gulp = require('gulp');
var config = require('../config.js');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('../../webpack.config.js');
var browserSync = require('browser-sync');


gulp.task('webpack', function() {
  return gulp.src(config.source.javascripts + '**/*.js')
  .pipe(plumber())
  .pipe(webpackStream(webpackConfig, webpack))
  .pipe(uglify({
    output:{
      comments: /^!/
    }
  }))
  .pipe(gulp.dest(config.build.javascripts))
  .pipe(browserSync.stream());
});
