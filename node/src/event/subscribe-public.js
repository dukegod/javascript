const { EventEmitter } = require('events');

const evnets = new EventEmitter();
// xiaoming监听
evnets.on('click', (e) => {
  console.log(`一号订阅者得到消息---${e}`);
});
evnets.on('click', (e) => {
  console.log(`二号订阅者得到消息---${e}`);
});
evnets.on('click', (e) => {
  console.log(`三号订阅者得到消息---${e}`);
});


evnets.emit('click', 'hello');
