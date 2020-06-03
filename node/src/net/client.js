/**
 * by liuhui
 * 2018年06月05日14:55:52
 * 创建客户端
 */

const net = require('net');

const client = new net.Socket();
client.setEncoding('utf8');


client.connect('8124', 'localhost', () => {
  console.log('connect to server');
  client.write('from client')
});

console.log(process.cwd());

process.stdin.resume();
process.stdin.on('data', (data) => {
  // client.end();
  client.write(data);
});

client.on('data', (data)=>{
  console.log(`from server data----${data}`);
});

client.on('close', ()=>{
  console.log('close');
});
