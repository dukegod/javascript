/**
 * @description 发布订阅
 * @description 注意点：对象扩展变量的方式[变量]
 */

class EventEmit {
  constructor() {
    this.event = Object.create(null);
  }
  on(type, fn) {
    if (!this.event[type]) {
      this.event[type] = [];
    }
    this.event[type].push(fn);
  }
  emit(type, ...args) {
    const fns = this.event[type];
    fns.map(fn => fn.apply(this, args));
  }
  off(type, fn) {
    if (!this.event[type]) {
      return this;
    }
    if (!fn) {
      this.event[type] = null;
      return this;
    }
    const index = this.event[type].indexOf(fn);
    this.event[type].splice(index, 1);
    return true;
  }
  once(type, fn, ...args) {
    const only = () => {
      fn.apply(this, args);
      this.off(type, only);
    };
    this.on(type, only);
  }
}

export default EventEmit;

