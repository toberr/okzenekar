var globby = require('globby');
var fs = require('fs-extra');

var staticFilePattern = '(png|jpg|gif|svg|ttf|woff)',
    fileList = globby.sync([
      'dist/**/*'
    ]).filter((x) => !fs.lstatSync(x).isDirectory()),

    getFileName = (file) => {
      if (/\.(js(\.map)?)$/.test(file)) {
        return file.replace('dist', 'dist/assets/js')
      } else if (/\.(css(\.map)?)$/.test(file)) {
        return file.replace('dist', 'dist/assets/css')
      } else if (new RegExp('\\.' + staticFilePattern + '$').test(file)) {
        return file.replace('src/assets', 'assets')
      } else {
        return file;
      }
    },

    getContent = (file) => {
      var temp = fs.readFileSync(file, 'utf8'),
          pairs = [
            {
              pattern: /assets\/([a-z-0-9-_]*?)\.js/gmi,
              replacement: 'assets/js/$1.js'
            },
            {
              pattern: /assets\/([a-z-0-9-_]*?)\.css/gmi,
              replacement: 'assets/css/$1.css'
            },
            {
              pattern: /assets\/src\/assets/gmi,
              replacement: '/assets'
            },
            {
              pattern: /src\/assets\//gmi,
              replacement: ''
            },
          ]

          pairs.forEach(function (item) {
            temp = temp.replace(item.pattern, item.replacement);
          });

          return temp;
    };

console.log(fileList);

// remove src/ from the paths and the file contents
fileList.forEach(function (file, i) {

  if (new RegExp('\\.' + staticFilePattern + '$').test(file)){
    fs.copySync(file, file.replace('src/assets', 'assets').replace('dist', 'test'));
  } else {
    var content = getContent(file),
        fileName = getFileName(file);
    fs.outputFileSync(fileName.replace('dist', 'test'), content);
  }
});
//fs.removeSync('dist/src');