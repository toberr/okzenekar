var globby = require('../node_modules/globby');
var fs = require('../node_modules/fs-extra');
var path = require('path');
var gallery = {};
var getFileName = function (item) {
  return/[^\/][a-z0-9-_.]*$/.exec(item);
}

gallery.thumb = globby.sync(
  path.resolve(
    __dirname, '..', 'src', 'assets', 'img', 'gallery', 'thumb', '*.jpg'
  ));

gallery.pic = globby.sync(
  path.resolve(
    __dirname, '..', 'src', 'assets', 'img', 'gallery', '*.jpg'
  ));

var result = gallery.thumb.map(function (value, index) {
  return {
    thumb: getFileName(value),
    pic: getFileName(gallery.pic[index])
  }
});

fs.outputFileSync(
  path.resolve(__dirname, '..', 'src', 'generated', 'gallery-images.json'),
  JSON.stringify(result)
);