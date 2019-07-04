/**
 * @description 判断字符串是不是为空, 需要去除 null， undefined， {}
 * @param params
 * @returns {boolean}
 */
function isStringEmpty(params) {
  return typeof params === 'string' ? params.trim().length === 0 : false;
}

console.log(isStringEmpty('   ddd'));
console.log(isStringEmpty(''));
console.log(isStringEmpty());
console.log(isStringEmpty(null));
console.log(isStringEmpty(undefined));
console.log(isStringEmpty({}));
