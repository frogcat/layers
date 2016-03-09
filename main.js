"use strict";

var request = require('request');
var fs = require('fs');

var dst = process.argv[2];
var src = process.argv[3];

if (!dst || !src)
  process.exit(1);

function solo(json) {
  (json.layers || json.entries || []).forEach(solo);
  if (json.id)
    fs.writeFileSync(dst + '/' + json.id + ".txt", JSON.stringify({
      layers : [ json ]
    }, null, '  '));
}

function tree(json, dir) {
  var index = 0;
  (json.layers || (json.forEach ? json : [])).forEach(function(v, i) {
    if (v.entries) {
      index++;
      var child = dir + '/' + index;
      fs.mkdirSync(child);
      tree({
        layers : v.entries
      }, child);
      v.src = index + "/0.txt";
      delete v.entries;
    }
  });
  fs.writeFileSync(dir + '/0.txt', JSON.stringify(json, null, '  '));

}

request.get({
  url : src
}, function(error, response, txt) {

  if (error) {
    console.log(error);
    process.exit(1);
  }

  while (txt.indexOf("{") != 0)
    txt = txt.substr(1);
  var json = JSON.parse(txt);
  solo(json);

  var dir = dst + "/" + src.replace(/^.*\//, "").replace(/\..*$/, "");
  fs.mkdirSync(dir);
  tree(json, dir);
});
