'use strict';

var gulp = require('gulp');
var config = require('../config.js');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

// copyIconFontCSS
gulp.task('copyIconFontCSS', function() {
  return gulp.src(config.build.fonts + 'css/*.css')
  .pipe(rename({
    prefix: '_',
		basename: 'iconfont',
    extname: '.scss'
  }))
  .pipe(gulp.dest(config.source.stylesheets + 'options/'))
  .pipe(browserSync.stream());
});
