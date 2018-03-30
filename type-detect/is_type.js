/**
 * 判断各种类型
 * 2018年01月09日12:32:561 by 刘辉
 */
function isTypeObject(s) {
  return typeof(s) === 'object'
}

function isString(s) {
  console.log(Object.prototype.toString.call(s))
  return Object.prototype.toString.call(s) === '[object String]';
}

function isFunction(s) {
  console.log(Object.prototype.toString.call(s))
  return Object.prototype.toString.call(s) === '[object Function]';
}

function isObject(s) {
  console.log(Object.prototype.toString.call(s))
  return Object.prototype.toString.call(s) === '[object Object]';
}

function isArray(s) {
  console.log(Object.prototype.toString.call(s))
  return Object.prototype.toString.call(s) === '[object Array]';
}

module.exports = {
  isTypeObject,
  isArray,
  isObject,
  isFunction,
  isString
};

// console.log(isString('abc'));
//
// function isf(params) {}
//
// console.log(isFunction(isf));
//
// const arr = [];
//
// console.log(isArray(arr));
//
// const obj = {}
// console.log(isObject(obj))
