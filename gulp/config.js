//anyDir
var anyDir= {
  root   : '.',
  dirName: '/sinicx/'
}

module.exports = {

  //server
  startPath: {
    root: anyDir.dirName
  },

  //source
  source: {
    root               : 'source'+anyDir.dirName,
    stylesheets        : 'source'+anyDir.dirName+'assets/stylesheets/',
    javascripts        : 'source'+anyDir.dirName+'assets/javascripts/',
    images             : 'source'+anyDir.dirName+'assets/images/',
    icons              : 'source'+anyDir.dirName+'assets/icons/',
    templates          : 'source'+anyDir.dirName+'assets/templates/',
    file               : 'source'+anyDir.dirName+'assets/file/'
  },

  //build
  build: {
    root         : 'build'+anyDir.dirName,
    stylesheets  : 'build'+anyDir.dirName+'assets/css/',
    javascripts  : 'build'+anyDir.dirName+'assets/js/',
    images       : 'build'+anyDir.dirName+'assets/img/',
    fonts        : 'build'+anyDir.dirName+'assets/fonts/',
    file         : 'build'+anyDir.dirName+'assets/file/'
  },

  //iconFont
  iconFont: {
    fontName  : 'iconfont',
    className : 'iconfont',
    fontsPath : anyDir.dirName+'assets/fonts/',

  }

};
