/**
 * Created by hui on 16/1/8.
 */
'use strict';
// 连接池
var mysql = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql',
  database : 'mydb'
});

// instance query sql

var querySQL = 'select * from uers limit 5';

pool.getConnection(function(err,conn){
  if (err) console.log(err);
  conn.query(querySQL,function(err,rows){
    if (err) console.log('conn' + err);
    for (var i in rows){
      console.log(rows[i]);
    }
    conn.release();
  })
})