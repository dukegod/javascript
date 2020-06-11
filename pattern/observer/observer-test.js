var event = {
  queue: [],
  listen(key, fn) {
    console.log(this)
    if (!this.queue[key]) {
      this.queue[key] = [];
    }
    this.queue[key].push(fn);
  },

  trigger() {
    console.log(arguments);
    var key = Array.prototype.shift.call(arguments),
      fns = this.queue[key];

    console.log(arguments);
    fns.map(fn => {
      fn.apply(this, arguments);
    });
  }
};

var installEvent = function(obj) {
  for (var i in event) {
    obj[i] = event[i];
  }
};

var salesOffices = {};

installEvent(salesOffices);

salesOffices.listen('squareMeter88', function(price) {
  console.log('价格= ' + price);
});
salesOffices.listen('squareMeter100', function(price) {
  console.log('价格= ' + price);
  // 小明订阅消息
  // 小红订阅消息
});
salesOffices.trigger('squareMeter88', 2000000); // 输出:2000000
salesOffices.trigger('squareMeter100', 3000000); // 输出:3000000
