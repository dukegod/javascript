/**
 * Created by hui on 16/4/8.
 */
Function.prototype.callWheel = function (context) {
  // 缓存this对象，调用的对象
  let ct = !!context ?  context : global;
  const self = this || global;
  ct.fn = self;
  let re =  ct.fn(...arguments);
  // delete fu;
  return re;
}



function convertArray(){
  return Array.prototype.slice.callWheel(arguments);
}
var i = convertArray(1,2,3,4,5);
console.log(i);

