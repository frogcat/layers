# layers
Extractor for gsi layers.txt

## What's this?

entries プロパティの使われた layers.txt を src プロパティを使った形式に変換するための node.js スクリプトです。

## How to

	npm install
	mkdir -p out
	node main.js out http://gsi-cyberjapan.github.io/gsimaps/layers_txt/layers3.txt


## gh-pages

[![Build Status](https://travis-ci.org/frogcat/layers.svg?branch=master)](https://travis-ci.org/frogcat/layers)

Travis-CI を設定して、実行結果を gh-pages に配備するようにしています。
ビルドが成功していれば以下のデータが利用可能です。

### distributed layers.txt

layers0 ～ layers_experimental を対象に展開しています。
以下の URL から芋づる式に取得が可能です。

* <http://frogcat.github.io/layers/layers0/0.txt>
* <http://frogcat.github.io/layers/layers1/0.txt>
* <http://frogcat.github.io/layers/layers2/0.txt>
* <http://frogcat.github.io/layers/layers3/0.txt>
* <http://frogcat.github.io/layers/layers4/0.txt>
* <http://frogcat.github.io/layers/layers_experimental/0.txt>


### layers.txt by ID

上記の layers.txt 群のうち、ID の付与されたレイヤーについては個別に単体のファイルとして出力しています。
たとえば国土地理院標準地図の ID が **std** だとわかっている場合には、
以下のような URL から **std** の情報だけを取得することができます。

* <http://frogcat.github.io/layers/std.txt>

### Example

展開された layers.txt を使ったツリーナビゲーションの例

* <http://frogcat.github.io/layers/>

