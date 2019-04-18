/**
 * 判断各种类型
 * 2018年01月09日12:32:561 by 刘辉
 */

function isNull(params) {
  return params === null;
}

function isUndefined(params) {
  return params === undefined
}

function isTypeObject(s) {
  return typeof (s) === 'object';
}

function isNumber(s) {
  return Object.prototype.toString.call(s) === '[object Number]'
}

function isString(s) {
  return Object.prototype.toString.call(s) === '[object String]';
}

function isFunction(s) {
  return Object.prototype.toString.call(s) === '[object Function]';
}

function isObject(s) {
  return Object.prototype.toString.call(s) === '[object Object]';
}

function isArray(s) {
  return Object.prototype.toString.call(s) === '[object Array]';
}

function isSymbol(s) {
  return Object.prototype.toString.call(s) === '[object Symbol]'
}

export {
  isNull,
  isUndefined,
  isTypeObject,
  isArray,
  isObject,
  isFunction,
  isString,
  isNumber,
  isSymbol
};
