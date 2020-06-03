
/**
 * 服务端端代码
 */

const http = require('http');
const stream = require('stream');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 获取头部信息
  const headers = req.headers;
  console.log(headers)
  let dt='';
  req.on('data', chunk => {
    dt += chunk;
  });
  req.on('end', () => {
    // dt = querystring.parse(dt);
    console.log('接受客户端数据完毕');
    console.log(dt);
    const path = `${__dirname}/1.txt`;
    const readstream = fs.createReadStream(path);
    let fils = '';
    readstream.on('data', (chunk) => {
      fils += chunk;
      res.end(chunk)
    });
    readstream.on('end', ()=> {
      // console.log(fils);
    })
    // res.end('9999');
  })
});

server.listen(3000)

