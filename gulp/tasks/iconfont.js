'use strict';

var gulp = require('gulp');
var config = require('../config.js');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

gulp.task('iconFont', function() {
   return gulp.src(config.source.icons + '*.svg')
	 .pipe(iconfont({
      fontName: config.iconFont.fontName,
      prependUnicode: true,
      normalize: true,
      fontHeight: 500,
      formats: ['ttf', 'eot', 'woff', 'svg']
    }))
    .on('glyphs', function(glyphs, options) {
      options = {
        glyphs: glyphs.map(function(glyph) {
         return {
          name: glyph.name,
          codepoint: glyph.unicode[0].charCodeAt(0)
          };
        }),
        fontName: config.iconFont.fontName,
        fontPath: config.iconFont.fontsPath,
        className: config.iconFont.className
      };
      gulp.src(config.source.templates + 'iconfont.html').pipe(consolidate('lodash', options)).pipe(gulp.dest(config.build.fonts));
      gulp.src(config.source.templates + 'iconfont.css').pipe(consolidate('lodash', options)).pipe(gulp.dest(config.build.fonts + 'css/'));
    })
    .pipe(gulp.dest(config.build.fonts));


});
