'use strict';

var gulp = require('gulp');
var config = require('../config.js');
var rimraf = require('rimraf');

// clean build directory
gulp.task('cleanBuild', function(cb) {
  rimraf(config.build.root, cb);
});
