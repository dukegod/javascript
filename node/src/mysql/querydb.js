var db = require('./db.js');

db.connDB();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'mydb'
});
var querySQL = 'SELECT * FROM goods';
connection.query(querySQL, function (err1, res1) {
  if (err1) console.log(err1);
  console.log('querySQL');
  console.log(res1);
});

db.endDB();