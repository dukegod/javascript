const EventsEventEmitter = require('events');

class MyEmitter extends EventsEventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('click', () => {
  console.log('you disturb me !');
});

setTimeout(() => {
  myEmitter.emit('click');
}, 10);
