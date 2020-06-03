/**
 * 处理路由信息
 * @param {*} path
 * @param {*} method
 */
const fs = require('fs');

const handleRouter = (path, res) => {
  fs.readFile(path, null, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write('not fond');
    } else {
      res.write(data);
    }
    res.end();
  });
};

module.exports = handleRouter;
