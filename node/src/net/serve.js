
const net = require('net');

const server = net.createServer((conn) => {
  console.log('connected');

  conn.on('data', (data) => {
    console.log(`data:from----${conn.remoteAddress}--${conn.remotePort}`);
    conn.write(`server data:${data}`);
  });

  conn.on('close', () => {
    console.log('close')
  })
});

server.listen(8124);

