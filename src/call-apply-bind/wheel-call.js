
Function.prototype.callWheel = function (thisAry) {
  // 缓存this对象，调用的对象
  let context = thisAry || {};
  context.fn = this;
  // 缓存返回值
  const result = context.fn(...arguments);
  delete context.fn;
  return result;
}

function a(){
  console.log(arguments);
  console.log(this); //输出函数a中的this对象
}
var b = {} //定义函数b

a.callWheel(b, 9999)
