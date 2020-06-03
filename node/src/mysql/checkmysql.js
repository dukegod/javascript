/**
 * Created by hui on 16/1/8.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if(err) throw err;
  console.log('The solution is: ', rows[0].solution);
  console.log(fields);

});

connection.end();