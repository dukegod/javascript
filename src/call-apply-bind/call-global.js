// apply-call.js
//
//
//
// apply()是函数对象的一个方法，它的作用是改变函数的调用对象，
var x = 0;
function test4() {
  console.log(this.x);
}
var o={};
o.x = 1;
o.m = test4;
o.m.call(); // 0   // apply()的参数为空时，默认调用全局对象。因此，这时的运行结果为0，证明this指的是全局对象。

Function.prototype.callWheel = function (context) {
  // 缓存this对象，调用的对象
  console.log(this);
  let ct = !!context ?  context : window;
  const self = this || window;
  ct.fn = self;
  ct.fn(...arguments);
  delete fu;
}

o.m.callWheel();
