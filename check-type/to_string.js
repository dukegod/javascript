/**
 * [isArray 判断是不是数组的终极方法]
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
// function isArray(value) {
//   if(typeof Array.isArray === 'function') {
//     return Array.isArray(value);
//   } else {
//     return Object.prototype.toString.call(value) === 'object Array';
//   }
// }
// var arr = [];
// isArray(arr);

/**
 * [isType 返回类型]
 * @return {} [具体的类型]
 */
function isType(e){
  console.log(Object.prototype.toString.call(e).split(' ')[1].slice(0,-1).toLocaleLowerCase());
  return Object.prototype.toString.call(e).split(' ')[1].slice(0,-1).toLocaleLowerCase();
}

var array = [];
isType(array);
