var config = {
  method: 'GET',
  hostname: 'www.baidu.com',
  path: '/'
};
exports.getThingFromBaidu = function (http, callback) {
  var req = http.request(config, function (res) {
    var returnData = '';
    res.setEncoding("utf8");
    res.on('data', function (churk) {
      returnData += churk;
    }).on("end", function () {
      console.log("there is no more things to be gotten!");
      callback(returnData); //返回一个回调函数
    });
  });
  req.on('error', function (e) {
    console.log(e.msg);
  });
  req.write(''); //为一个字符串或者object
  req.end();
};
