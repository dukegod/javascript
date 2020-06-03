var http = require('http'); //此模块为node核心模块，用于构建服务器
var path = require('path');
var fs = require('fs');
var gB = require('./mid-connect.js');

http.createServer(function(req, res) {
  //静态资源路径
  //__dirname在node里面是个特殊的全局变量，它永远表示它所在文件的路径
  var staticPath = path.join(__dirname, ''); //join方法的作用就是一个字符串的拼接
  var body;
  if (req.url == '/') {
    fs.readFile('./index.html', function(err, data) {
      if (err) throw new Error(err);
      body = data;
      res.setHeader('Content-Length', Buffer.byteLength(body));
      res.write(body);
      res.end();
    });
  } else if (req.url == '/favicon.ico') {
    fs.readFile('./favicon.ico', function(err, data) {
      if (err) throw new Error(err);
      body = data;
      res.setHeader('Content-Length', Buffer.byteLength(body));
      res.write(body);
      res.end();
    });
  } else if (req.url == '/baidu/') {
    gB.getThingFromBaidu(http, function(data) {
      body = data;
      res.setHeader('Content-Length', Buffer.byteLength(body));
      res.write(body);
      res.end();
    });
  } else {
    var filename = path.join(staticPath, req.url);
    console.log(filename);
    fs.readFile(filename, function(err, data) {
      if (err) throw new Error(err);
      body = data;
      res.setHeader('Content-Length', Buffer.byteLength(body));
      res.write(body);
      res.end();
    });

  };
}).listen("3000", function() {
  console.log("服务器正在运行，端口为3000!");
});