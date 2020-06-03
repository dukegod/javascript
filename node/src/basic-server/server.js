/**
 * Created by liuhui15 on 2017/2/21.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html,charset=uft8');
  res.setHeader('Date', new Date().toUTCString);
  const expaireDate = new Date('2017/12/12').toUTCString;
  res.setHeader('Expires', expaireDate);
  res.setHeader('Cache-Control', 'private');
  res.setHeader('Set-Cookie', 'hh-auto type cookie; expires=' + expaireDate + ';');
  req.headers['Cookie'] = 'hh';
  req.headers['Accept-Type'] = 'text/html';
  let body;
  console.log(req.url);
  switch (true) {
    case req.url == '/':
      console.log(__dirname + '/index.html');
      fs.readFile(__dirname + '/index.html', (err, data) => {
        if (err) {
          throw new Error("error");
          return;
        };
        body = data;
        res.setHeader("Content-Length", Buffer.byteLength(body));
        res.statusCode = 200;
        res.write(body);
        res.end();
      });
      break;
    case req.url == '/a':
      console.log(__dirname + 'a.html');
      fs.readFile(__dirname + '/a.html', (err, data) => {
        if (err) {
          throw new Error("error");
          return;
        };
        body = data;
        res.setHeader("Content-Length", Buffer.byteLength(body));
        res.statusCode = 200;
        res.write(body);
        res.end();
      });
      break;
    case req.url == '/synxml.js':
      console.log(__dirname + 'synxml.js');
      fs.readFile(__dirname + '/synxml.js', (err, data) => {
        if (err) {
          throw new Error("error");
          return;
        };
        body = data;
        res.setHeader("Content-Length", Buffer.byteLength(body));
        res.statusCode = 200;
        res.write(body);
        res.end();
      });
      break;
    case req.url == '/ansynxml.js':
      console.log(__dirname + 'ansynxml.js');
      fs.readFile(__dirname + '/ansynxml.js', (err, data) => {
        if (err) {
          throw new Error("error");
          return;
        };
        body = data;
        res.setHeader("Content-Length", Buffer.byteLength(body));
        res.statusCode = 200;
        res.write(body);
        res.end();
      });
      break;
    case req.url == '/b':
      fs.readFile(__dirname + '/b.html', (err, data) => {
        if (err) {
          throw new Error("error");
          return;
        };
        body = data;
        res.setHeader("Content-Length", Buffer.byteLength(body));
        res.statusCode = 200;
        res.write(body);
        res.end();
      });
      break;
    case req.url == '/one':
      fs.readFile(__dirname + '/1.txt', (err, data) => {
        if (err) {
          throw new Error("error");
          return
        };
        console.log(data);
        res.setHeader("Content-Length", Buffer.byteLength(data));
        res.statusCode = 200;
        res.write(data);
        res.end(data);
      });
      break;
    case req.url == '/ansyn':
      fs.readFile(__dirname + '/1.txt', (err, data) => {
        if (err) {
          throw new Error("error");
          return
        };
        console.log(data);
        res.setHeader("Content-Length", Buffer.byteLength(data));
        res.statusCode = 200;
        res.write(data);
        res.end(data);
      });
      break;
    default:
      res.statusCode = 200;
      res.write('404 Error');
      res.end();
      break;
  }
})

app.listen(3000, function () {
  console.log('监听3000端口');
})
