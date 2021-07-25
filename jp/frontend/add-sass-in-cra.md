# create-react-appで作られたReactアプリにSassを追加する

`Written: 2021-07-26`

**TL;DR** : `yarn add sass`

`create-react-app`、つまり`CRA`はwebpackなどの設定がほぼ要らず、Reactの開発に集中できるのが一番の利点だと思う。

今回Reactを勉強しながらPWA & TSをサポートするテンプレートを使ったが、これはCSSプリプロセッサが入ってなかったためSassを入れようとした。

[CRAの公式サイトのガイド](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)に親切に書いてあるので、このまま進めた。

そしたら下記のエラー。

```
Error: Node Sass version 6.0.1 is incompatible with ^4.0.0 || ^5.0.0.
```

調べると、どうやら`CRA`がサポートしている`node-sass`のバージョンが低く、最新バージョン(6.0.1)はまだ使えないようだ。

なので、`^5.0.0`をインストールしようとしたらなぜかインストール不可。

npmで検索してみると、こういうことが書いてあった。

```
Warning: LibSass and Node Sass are deprecated. While they will continue to receive maintenance releases indefinitely, there are no plans to add additional features or compatibility with any new CSS or Sass features. Projects that still use it should move onto Dart Sass.
```

そうか。deprecatedされたんだ。(だけど`5.0.0`タグはまだ生きているのにダウンロードできないのはなぜだ…)

とりあえずSass公式のガイドの通り`dart-sass`をインストール。バージョンの指定は要らなかった。

```
% yarn add sass
```

そして`*.sass|scss`をimportすると終わり。
