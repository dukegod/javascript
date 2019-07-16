/**
 * @description 空对象判断
 * @param {*} params
 */

function isEmptyObject (params) {
  return JSON.stringify(params) === "{}"
}
