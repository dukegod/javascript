/**
 * Created by hui on 16/1/8.
 */
var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});
connection.connect();

var querySQL = 'SELECT * FROM goods';
connection.query(querySQL, function (err1, res1) {
  if (err1) console.log(err1);
  console.log('querySQL');
  console.log(res1);
});
connection.end();
