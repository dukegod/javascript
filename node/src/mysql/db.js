/*
 * mysql 
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});

function connDB() {
  connection.connect();
}

function endDB() {
  connection.end();
}

exports.connDB = connDB;
exports.endDB = endDB;

