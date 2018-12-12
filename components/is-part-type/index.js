/**
 * 是否包含某个类型的判断
 * @param {*} params string
 *  a-z: 97-122
 *  A-Z: 65-90
 *  ascii码大于128的是汉字
 *  replace(/[^\x00-\xff]/g, "**");
 */
import { isNull, isUndefined, isString } from '../type-detect';

function isPartChinese(params) {
  if (isNull(params)) {
    return null;
  }

  if (isUndefined(params)) {
    return undefined;
  }

  if (!isString(params)) {
    return 'not string';
  }

  return params.split('').some(e => e.charCodeAt(0) > 128);

}

function isPartLowercase(params) {
  if (isNull(params)) {
    return null;
  }

  if (isUndefined(params)) {
    return undefined;
  }

  if (!isString(params)) {
    return 'not string';
  }

  return params.split('').some(e => e.charCodeAt(0) >= 97 && e.charCodeAt(0)<= 122);

}

function isPartUppercase(params) {
  if (isNull(params)) {
    return null;
  }

  if (isUndefined(params)) {
    return undefined;
  }

  if (!isString(params)) {
    return 'not string';
  }

  return params.split('').some(e => e.charCodeAt(0) >= 65 && e.charCodeAt(0)<= 90);

}

export {
  isPartChinese,
  isPartLowercase,
  isPartUppercase
};
