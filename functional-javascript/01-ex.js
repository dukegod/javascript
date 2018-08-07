// import { truthy } from './utils/truthy';

const truthy = require('./utils/truthy')

const existy = require('./utils/exist')

console.log(truthy.truthy(3))
console.log(existy.existy(3))

function funEx(fun) {
  return function(array) {
    return fun.apply(null, array)
  }
}

const sum = funEx(function(x, y) {
  return x+y
})([1,2]);

console.log(sum);

