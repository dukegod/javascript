// 输出文件的后缀名字
// 2016-01-12 20:59:45

function outFileType(e) {
  const point = e.split('.');
  return point[point.length - 1];
}

module.exports = outFileType;

console.log(outFileType('index.js')); //js
console.log(outFileType('index.html')); //html
console.log(outFileType('index.html.js')); //js
