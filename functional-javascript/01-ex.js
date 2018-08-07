/* eslint-disable semi */

const truthy = require('./utils/truthy');
const existy = require('./utils/exist');

console.log(truthy.truthy(3))
console.log(existy.existy(null))

function funEx(fun) {
  return function (array) {
    return fun(...array)
  }
}

const sum = funEx((x, y) => x + y)([1, 2]);

console.log(sum);

