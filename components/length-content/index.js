/**
 *
 * @param {*} params input content
 *
 * 汉字的输入检测，如用户名不能为汉字，或者类似微博的140字符限制，
 * 一般是将一个汉字当两个字符计算。计算时用正则替换汉字为两个ascii字符，然后用length属性获取长度
 */
import { isNull, isUndefined, isString, isNumber } from '../type-detect';

import { isPartChinese } from '../is-part-type';

function contentLength(params) {
  if (isNull(params)) {
    return null;
  }

  if (isUndefined(params)) {
    return undefined;
  }

  if (isNumber(params)) {
    return params.toString().length;
  }

  if (!isString(params) && !isNumber(params)) {
    return 'not string';
  }

  if ( isPartChinese(params) ) {
    params =  params.replace(/[^\x00-\xff]/g, '**')
  }

  return params.length;
}

export default contentLength;
