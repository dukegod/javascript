const EventsEventEmitter = require('events');

class MyEmitter extends EventsEventEmitter {
}

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b)=> {
  console.log(a, b, this);
});

myEmitter.emit('event', 'a', 'b');

