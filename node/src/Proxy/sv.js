const http = require('http');
const url = require('url');

const ft = require('./index');

const sv = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const path = url.parse(req.url).pathname;

  if (path === '/ss') {
    ft();
  }

  if (path === '/') {
   res.end('okay');
  }
});

sv.listen(3001);
