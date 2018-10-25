# baseFW
[ Development Framework for Frontend ]  
baseFW [ フロントエンド開発環境 ]

## Description
- [ zero ]とコンパイルフローは同じ
- npm packageとnode.jsのバージョンアップが目的（2017年7月現在）
- [ yarn ]の導入(npm互換)
  - [ yarn ]でnode-moduleをインストールすると、各パッケージのバージョンが固定されるので、別のMacではエラーが発生するとうことが防げる
- 使用停止([ zero ]から削除したもの)
 - ~~Bourbon~~
 - ~~Neat~~
 - ~~Ruby~~
 - ~~bundler~~
 - ~~bower~~
 - ~~CoffeeScript~~
- baseFWは、最低限の基本パッケージなので、必要な機能のnode-moduleを追加して使用する。

---
## Dependencies
### task runner
- [ ndenv ](https://github.com/riywo/ndenv/blob/master/README.md)
 - node.jsをバージョン違いで複数インストールし、プロジェクト毎に自動切替で使用できる
- [ Node.js ](https://nodejs.org/ja/)
 - baseFWは、v6.11.0LTSを推奨
- [ yarn ](https://yarnpkg.com/lang/en/)
 - npm互換のパッケージマネージャー
 - インストールされるnpmパッケージ一覧は、pakage.jsonに記載
 - 参考 https://ics.media/entry/13838
- [ Gulp ](http://gulpjs.com/)
 - タスクランナー

### css
- [ sass ](http://sass-lang.com/)
- [ smacss ](https://smacss.com/)
 - cssファイルをlayout,module等に分けて設計
 - 厳密には適用していないが参考にしてsassファイルを分けている
 - 参考 https://app.codegrid.net/entry/smacss-1
- [ BEM ](https://en.bem.info/)
 - cssの命名規則
 - 参考 https://app.codegrid.net/entry/bem-basic-1
- [ FLOCSS ](https://github.com/hiloki/flocss)
 - cssファイルをfoundation, layout, object に分ける構成案

### JavaScript
- [ webpack ](https://webpack.github.io/)
 - モジュールバンドラー
 - beseFWでは、moduleに分けたJSファイルを統合するのに使用
 - node-module以下にインストールしたjQueryを使用する設定もwebpack.config.jsでしている
- [ babel ](https://babeljs.io/)
 - ES2015(ES6)=>ES5(IE11対応)トランスパイラ

---
## Installation
インストール
### (1) ndenv
インストール  
【参考】https://qiita.com/noraworld/items/462689e108c10102d51f
```
$ git clone https://github.com/riywo/ndenv ~/.ndenv
```
パスを通す
```
$ echo 'export PATH="$HOME/.ndenv/bin:$PATH"' >> ~/.bash_profile
$ echo 'eval "$(ndenv init -)"' >> ~/.bash_profile
```
シェル再起動
```
$ exec $SHELL -l
```
### (2) node-build を導入する
ndenv installコマンドを使用するためのプラグインをインストール
```
$ git clone https://github.com/riywo/node-build.git $(ndenv root)/plugins/node-build
```
### (３) Node.js v6.11.0 と v4.2.1 インストール
```
$ ndenv install v6.11.0
$ ndenv install v4.2.1
$ ndenv rehash
```
#### インストール済みnode.jsのバージョン確認
```
$ ndenv versions
```
#### グローバルnode.jsの指定（何も指定がなければこのグローバルのバージョンが動く）
```
$ ndenv global v4.2.1
```
#### プロジェクトローカルnode.jsの指定（baseFWはここでv6.11.0を指定）
```
$ ndenv local v6.11.0
```
#### 現在使用中のNode.jsのバージョン確認
```
$ node -v
```
### (４) yarn インストール
```
$ sudo npm install -g yarn
```

### (５) node-module　インストール
プロジェクトのフォルダで行います。
```
$ yarn
```
今までの'$ npm install'と互換のコマンドです（npmではなくyarnを使ってpackage.jsonに記載されているnode-moduleをインストールする）

### (６) build & Localhost立ち上げ
```
$ gulp  
  or  
$ npm start
```
ここからは' zero 'と変わりません。  
[ source ]で作成して、[ build ]に書き出されます。

---
## FLOCSSについて
### 【sass構造】
||||||
|--------|---|---|---|---|
| /assets |||||
|└|/stylesheets||||
||└|/foundation|以前の[base]ディレクトリと同じ基本設定||
|||└|/mixin||
|||└|/variable|color,width設定等|
||└|/layout|大枠となる部分のレイアウト設定||
||└|/object|色々な部分で使用できるカタマリ、パーツを設定||
|||└|/component|再利用できるパターンとして、小さな単位のモジュールを定義|
|||└|/project|プロジェクト固有のパターンであり、いくつかのComponentと、それに該当しない要素によって構成されるものを定義|
|||└|/utility|ComponentとProjectレイヤーのObjectのモディファイアで解決することが難しい・適切では無い、わずかなスタイルの調整のための便利クラスなどを定義。_general.sass|
||└|/pages|objectで設定できないページ固有のスタイルを定義||

### 【class定義】
#### Objectのプレフィックス
Objectレイヤーの中で分類されるモジュールに対し、役割を明確にするためにプレフィックスをつけることを推奨します。  

- Component - .c-*  
- Project - .p-*  
- Utility - .u-*  

これらの命名規則は、あなたのプロジェクトが持つオリジナルの命名規則に従い、キャメルケースなどを組み合わせたものでも構いませんが、必ず命名に一貫性を保つようにしてください。  

---
## Author

[kawamura(delights)](kawamura@delights.co.jp)
- 180320 babel追加 ES2015(ES6)=>ES5(IE11対応)トランスパイラ
- 180129 sass構造 FLOCSSに変更
- 171229 node-buildについて追記

## License
[MIT](http://opensource.org/licenses/mit-license.php)
