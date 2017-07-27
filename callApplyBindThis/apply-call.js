// apply-call.js
//
//
//
// apply()是函数对象的一个方法，它的作用是改变函数的调用对象，
// 它的第一个参数就表示改变后的调用这个函数的对象。因此，this指的就是这第一个参数。

var x = 0;
function test4() {
　alert(this.x);
}
var o={};
o.x = 1;
o.m = test4;
o.m.apply(); // 0

// apply()的参数为空时，默认调用全局对象。因此，这时的运行结果为0，证明this指的是全局对象。

