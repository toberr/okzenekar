var globby = require('globby');
var fs = require('fs-extra');

var list = globby.sync([
    'dist/**/*.js', 
    'dist/**/*.css*', 
    'dist/**/*.html', 
    '!dist/**/*vendor*'
  ]);

//console.log(list);


// remove src/ from the paths and the file contents
list.forEach(function (file, i) {
  var temp = fs.readFileSync(file, 'utf8').replace(/src\/assets/gm, 'assets');
  fs.outputFileSync(file.replace('src/', ''), temp);
});
fs.removeSync('dist/src');
