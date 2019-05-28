/**
 *
 */

const Obj = {
  x: 1,
  funcApply(e) {
    console.log(e)
  }
};

const proxy = new Proxy(Obj, {
  get(target, p) {
    console.log(target, p);
    console.log(`get-----`);
  },
  set(target, p, value) {
    console.log(target, p, value);
    console.log(`set------`);
  },
  has(target, p) {
    console.log(target, p);
    console.log(`has-------`);
  },
  apply(target, thisArg, argArray) {
    console.log(target,  thisArg, argArray)
    console.log(`apply------`)
  },
  defineProperty(target, p, attributes) {
  },
  deleteProperty(target, p) {
  },
  getPrototypeOf(target) {
  },
  getOwnPropertyDescriptor(target, p) {
  },
  isExtensible(target) {
  },
  ownKeys(target) {
  },
  preventExtensions(target) {
  },
  setPrototypeOf(target, v) {
  }
});
// 触发get
proxy.x;
// 触发set
proxy.y = 21;
// 触发has
Reflect.has(proxy, "x");

