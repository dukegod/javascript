const path = require('path');

module.exports = {
  normalize() {
    console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))
  },
  join() {
    const i = path.join('/d', '/public');
    console.log(i);
  },
  extname() {
    console.log(path.extname('index.html'))
  }
}
