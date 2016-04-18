#!/bin/bash
set -e

mkdir -p out;
node main.js out http://maps.gsi.go.jp/layers_txt/layers0.txt
node main.js out http://maps.gsi.go.jp/layers_txt/layers1.txt
node main.js out http://maps.gsi.go.jp/layers_txt/layers2.txt
node main.js out http://maps.gsi.go.jp/layers_txt/layers3.txt
node main.js out http://maps.gsi.go.jp/layers_txt/layers4.txt
node main.js out http://maps.gsi.go.jp/layers_txt/layers5.txt
node main.js out http://maps.gsi.go.jp/layers_txt/layers_experimental.txt
node main.js out http://maps.gsi.go.jp/layers_txt/layers_invisible.txt
