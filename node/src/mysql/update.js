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
var updateSQL  = "UPDATE `goods` SET `good_num` = '1999' WHERE `id` = '3';";
connection.query(updateSQL, function (err1, res1) {
  if (err1) console.log(err1);
  console.log('updateSQL');
  console.log(res1);
});
connection.end();