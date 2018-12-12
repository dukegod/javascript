/**
 * 统一对外输出
 */
// have default export
export { default as strToJson } from './str2json';
export { default as sleep } from './sleep';

// have no default export
export {
  isTypeObject,
  isArray,
  isObject,
  isFunction,
  isString
} from './type-detect';
