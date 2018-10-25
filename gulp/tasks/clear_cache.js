'use strict';

var gulp = require('gulp');
var cache = require('gulp-cache');

// clear cache
gulp.task('clearCache', function (done) {
  return cache.clearAll(done);
});
