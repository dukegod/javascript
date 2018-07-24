(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.testF = factory());
}(this, (function () { 'use strict';

  async function testF() {
    const NUMBER = 900;
    return new Promise((resolve, reject) => {
      console.log(333390);
      resolve(NUMBER);
    });
  }

  return testF;

})));
