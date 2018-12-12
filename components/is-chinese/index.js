/**
 *
 * @param {*} params string
 *  a-z: 97-122
 *  A-Z: 65-90
 */
import { isNull, isUndefined, isString } from '../type-detect';

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

  const array = params.split('');
  let t;
  array.every(e => {
    if (64 < e.charCodeAt() && e.charCodeAt() < 91) {
      t =  'uppercase string'
    } else if (96 < e.charCodeAt(0) && e.charCodeAt(0) < 123) {
      t =  'lowercase string'
    } else if (e.charCodeAt() > 128) {
      t =  '汉字';
    } else {
      return false;
    }
  });
  return t;
}

export default isChinese;
