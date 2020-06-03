/**
 * Created by hui on 16/1/8.
 */
'use strict';
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});
connection.connect();

var insertSQL = " INSERT INTO `goods` (`good_name`, `good_color`, `good_num`) VALUES ('grape2', 'gra', 12);"
  connection.query(insertSQL, function (err1, res1) {
    if (err1) console.log(err1);
    console.log('INSERT');
    console.log(res1);
  });
connection.end();