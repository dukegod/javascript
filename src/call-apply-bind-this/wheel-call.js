
Function.prototype.callWheel = function (context) {
  // 缓存this对象，调用的对象
  let ct = !!context ?  context : global;
  const self = this || global;
  ct.fn = self;
  ct.fn(...arguments);
  delete fu;
}


//  test
const name = 1;
const foo = {
  name: 'foo'
}
function callFunc() {
  console.log(arguments);
  console.log(this.name);
}
// 直接调用
// callFunc.call(foo)
// callFunc.callWheel(foo)

// 带有参数

// callFunc.call(foo, 'abc', 123)
// callFunc.callWheel(foo, 'abc', 123)

callFunc.call(null)
callFunc.callWheel(null)
