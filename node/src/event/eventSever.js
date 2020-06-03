const EventsEventEmitter = require('events');

class MyEmitter extends EventsEventEmitter {
}

const myEmitter = new MyEmitter();

var callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

var callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);


myEmitter.emit('event');

myEmitter.emit('event');
