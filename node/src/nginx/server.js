const http = require('http');

http
  .createServer((req, res) => {
    console.log('请求' + req.url + '3000');
    res.writeHead(200, {
      'Content-type': 'text/plain'
    });
    res.end('ok1');
  })
  .listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');

http
  .createServer((req, res) => {
    console.log('请求' + req.url + '30011111');
    res.writeHead(200, {
      'Content-type': 'text/plain'
    });
    res.end('ok3001');
  })
  .listen(3001, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3001/');
