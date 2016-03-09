# layers
Extractor for gsi layers.txt

[![Build Status](https://travis-ci.org/frogcat/layers.svg?branch=master)](https://travis-ci.org/frogcat/layers)

## What's this?

layers.txt を取得して、レイヤー名と ID が一致するように展開するための node.js スクリプトです。

## How to

	npm install
	mkdir -p out
	node main.js out http://gsi-cyberjapan.github.io/gsimaps/layers_txt/layers3.txt


## gh-pages

### get layers.txt by ID

Travis-CI を設定して、実行結果を gh-pages に配備するようにしています。
たとえば国土地理院標準地図の ID が **std** だとわかっている場合には、
以下のような URL から **std** の情報だけを取得することができます。

* <http://frogcat.github.io/layers/std.txt>

### layers.txt with external reference

通常 layers.txt の **entries** プロパティは JSON Array ですが、
独自拡張として **entries のプロパティが String の場合には、外部の layers.txt フラグメントを参照するもとのとする** という方針で
ツリー構造を維持したままファイルを分散させています。

たとえば [layers3.txt](http://gsi-cyberjapan.github.io/gsimaps/layers_txt/layers3.txt) の
展開結果は <http://frogcat.github.io/layers/layers3/0.txt> に配備されており、
中身は以下のような形式です。
	
	{
	  "layers": [
	    {
	      "type": "LayerGroup",
	      "title": "防災関連",
	      "iconUrl": "",
	      "toggleall": false,
	      "entries": "./1/0.txt"
	    }
	  ]
	}

entries の値は文字列なので URL (ここでは相対 URL) とみなしています。

### Example

展開された layers.txt を使ったツリーナビゲーションの例

* <http://frogcat.github.io/layers/>

