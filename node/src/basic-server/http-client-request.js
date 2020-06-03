/**
 * 客户端请求
 */

const http = require('http');
const fs = require('fs');
// 请求体
const bodyParams = JSON.stringify({
  name: 'hui',
  age: 18
});

const options = {
  host: 'localhost',
  port: '3000',
  path: '/post',
  method: 'post',
  headers: {
    'Content-type': 'application/json'
  }
};

const req = http.request(options);
req.on('response', (res) => {

  const file = fs.createWriteStream( `${__dirname}/example.txt`);
  // file.write('hello, ');
  // file.end('world!');

  // console.log(res)
  let dt = '';
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(new Date() * 1);
    dt += chunk;
    file.write(chunk)
  });
  res.on('end', () => {
    console.log(new Date() * 1);
    console.log(`接受完毕`);
    // console.log(dt);
    file.end('wanbib');
  })
});
req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});
req.write(bodyParams);
req.end();
