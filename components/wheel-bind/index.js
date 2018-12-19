/**
 *
 * @param {*} func 要绑定的函数名字
 * @param {*} target this指向的对象
 * @param {*} params 参数
 */
import { isFunction, isUndefined, isNull } from '../type-detect';

function polyfillBind(func, target, ...params) {
  // func 是不是函数
  if (!isFunction(func)) {
    throw new TypeError('it is not function!!!')
  }
  // target 判断
  console.log(target)
  if (isNull(target)) {
    throw new TypeError('targer may not be null!!!')
  }
  if (isUndefined(target)) {
    throw new TypeError('targer may not be undefined!!!')
  }
  // 收集传入的参数
  const args = params;
  return function () {
    return func.apply(target, args.concat(...arguments));
  }
}

export default polyfillBind;


