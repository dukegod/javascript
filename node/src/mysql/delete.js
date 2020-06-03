/**
 * Created by hui on 16/1/8.
 */
'use strict';
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql',
  database : 'mydb'
});
connection.connect();

var deleteSQL  = " DELETE FROM `goods` WHERE `id` IN ('4');"
connection.query(deleteSQL, function (err1, res1) {
  if (err1) console.log(err1);
  console.log("delete");
  console.log(res1);
});
connection.end();