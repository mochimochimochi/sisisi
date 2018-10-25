'use strict';
var webpack = require('webpack');
// var path = require('path');

module.exports = {
	// entry: '',
	output: {
		filename: 'script.js'
	},
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // env を指定することで、ES2017 を ES5 に変換。
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ['env', {'modules': false}]
              ]
            }
          }
        ],
        // node_modules は除外する
        exclude: /node_modules/,
      }
    ]
  },
	resolve: {
    extensions: ['.js', '.coffee', '.html'],//拡張子の省略ができるように
    alias: { //インストールしたライブラリにaliasを貼るとrequire('jquery');のようにパス無しでつかえる
      jquery:  'jquery/dist/jquery.min.js',
			// slick: 'slick-carousel/slick/slick.min.js'
    }
  },
	plugins: [
    //jQueryをグローバルに出す
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      jquery: "jquery"
    })
  ]
};
