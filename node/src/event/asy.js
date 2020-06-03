var EventEmitter = require('events');
var util = require('util');

function MyThing() {
  EventEmitter.call(this);
  setImmediate(function (self) {
    self.emit('thing1');
  }, this);
  process.nextTick(function (self) {
    self.emit('thing2');
  }, this);
}
util.inherits(MyThing, EventEmitter);

var mt = new MyThing();

mt.on('thing1', function () {
  console.log('Thing1 emitted');
});

mt.on('thing2', function () {
  console.log('Thing2 emitted');
});
