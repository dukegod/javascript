/*
* 观察者模式
* */

class Observer {
  constructor() {
    this.list = [];
  }

  listen(key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  }

  fire(key, ...args) {
    let fns = this.list[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    fns.map((fn) => {
      fn.apply(null, args);
    });
  }
}


const obser = new Observer();
// 订阅了first的事件
obser.listen("first", function(name) {
  console.log(`1::${name}`);
});
obser.listen("first", function(name) {
  console.log(`1-1::${name}`);
});
obser.listen("first", function(name) {
  console.log(`1-2::${name}`);
});

// 订阅了second的事件
obser.listen("second", function(name) {
  console.log(`2:: ${name}`);
});

obser.fire("first", 88881, 23);
obser.fire("second", 99999, 234);
