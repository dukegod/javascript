# 闭包

函数对象通过作用域链相互关联起来，函数体内部的变量都可以保存在函数作用域内，成为“闭包”

特征：
+ 1.希望一个变量长期驻扎在内存中,参数和变量不会被垃圾回收机制回收
+ 2.避免全局变量的污染
+ 3.私有成员的存在


## 希望一个变量长期驻扎在内存中

```
var generateClosure = function() {
	var count = 0;
	var get = function() {
		count ++;
		console.log("inner:"+count);
		return count;
	    };
	return get;
};
var counter1 = generateClosure();
var counter2 = generateClosure();
console.log(counter1()); 
console.log(counter2()); 
console.log(counter1()); 
console.log(counter1()); 
console.log(counter2()); 
console.log("the end");

```

## 避免全局变量的污染  

```
'use strict';
function A(){
	var i = 0;
	function B(){
		i++;
		console.log('inner---',i);
	}
	return B;
}
var C = A();
console.log(C);

C();
// console.log(C());

```

[ref1](https://segmentfault.com/a/1190000000652891)

