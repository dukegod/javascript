# node使用mysql

### 相关知识点

+ 连接池问题
+ 数据安全

### 启动

本地启动mysql服务器
```$
mysql -u root -p
password： 
```

启动node服务
```
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
```

