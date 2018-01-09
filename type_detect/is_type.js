/**
 * 判断各种类型
 * 2018年01月09日12:32:561 by 刘辉
 */

function isString(s) {
  return Object.prototype.toString.call(s) === '[object String]';
}


function isFunction(s) {
  return Object.prototype.toString.call(s) === '[object Function]';
}


function isArray(s) {
  return Object.prototype.toString.call(s) === '[object Array]';
}


console.log(isString('abc'));

function isf(params) {}

console.log(isFunction(isf));

const arr = [];

console.log(isArray(arr));
