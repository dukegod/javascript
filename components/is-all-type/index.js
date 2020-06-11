/**
 *
 * @param {*} params string
 *  a-z: 97-122
 *  A-Z: 65-90
 *  ascii码大于128的是汉字
 *  replace(/[^\x00-\xff]/g, "**");
 */
import { isNull, isUndefined, isString } from '../is-type-detect';

function isChinese(params) {
  if (isNull(params)) {
    return null;
  }

  if (isUndefined(params)) {
    return undefined;
  }

  if (!isString(params)) {
    return 'not string';
  }

  return params.split('').every(e => e.charCodeAt(0) > 128);

}

function isLowercase(params) {
  if (isNull(params)) {
    return null;
  }

  if (isUndefined(params)) {
    return undefined;
  }

  if (!isString(params)) {
    return 'not string';
  }

  return params.split('').every(e => e.charCodeAt(0) >= 97 && e.charCodeAt(0)<= 122);

}

function isUppercase(params) {
  if (isNull(params)) {
    return null;
  }

  if (isUndefined(params)) {
    return undefined;
  }

  if (!isString(params)) {
    return 'not string';
  }

  return params.split('').every(e => e.charCodeAt(0) >= 65 && e.charCodeAt(0)<= 90);

}

export {
  isChinese,
  isLowercase,
  isUppercase
};
