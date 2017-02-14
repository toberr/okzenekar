var globby = require('globby');
var fs = require('fs-extra');
var beautifyHtml = require('js-beautify').html;


var fileList = globby.sync([
      'dist/**/*.html'
    ]);

fileList.forEach(file => {
  var content = fs.readFileSync(file, 'utf8');
  var pattern = /<script(.*?)async=""(.*?)(><\/script>)/gm;
  var scripts;
  var result = '';
  content = beautifyHtml(content, {"indent_size": 2});

  while ((scripts = pattern.exec(content)) !== null){
    //console.log(scripts[0]);
    result += scripts[0] + '\n';
  }

  content = content
    .replace(pattern, '')
    .replace('</body>', result + '</body>');
  //console.log(content);
  fs.outputFileSync(file, content);
});