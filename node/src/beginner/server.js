// 移除对postData的处理以及request.setEncoding （这部分node-formidable自身会处理），
// 转而采用将request对象传递给请求路由的方式
var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(3000);
  console.log('Server has started.');
}

exports.start = start;
