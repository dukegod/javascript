/**
 * Created by hui on 16/1/8.
 */
'use strict';
var mysql = require('mysql');
var conn;
function handleError () {
  conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql',
    database : 'mydb'
  });

  //连接错误，2秒重试
  conn.connect(function (err) {
    if (err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleError, 2000);
    }
  });

  conn.on('error', function (err) {
    console.log('db error', err);
    // 如果是连接断开，自动重新连接
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleError();
    } else {
      throw err;
    }
  });
}
handleError();