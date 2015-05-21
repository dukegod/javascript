/*
V8引擎只在严格模式之下，支持let和const;
let:
   只在块区域内有用，
   没有了“变量声明的提前”
   let表示的变量，只应出现在单线程运行的代码中，不能是多线程共享的，这样有利于保证线程安全。
*/
"use strict"

let x = "duke";
console.log(x);


for(let i=0; i<7;i++){
	console.log(i);
}

// 如果i在外面执行就不行但是（var可以这么做【变量声明提前】）
for(var k=0; k<7;k++){
	
}
console.log("k"+k);





/**
全局常量和线程安全
使用const
在let和const之间，建议优先使用const，尤其是在全局环境，不应该设置变量，只应设置常量。
这符合函数式编程思想，有利于将来的分布式运算。

所有的函数都应该设置为常量。

*/

// good
const a = 1;
const b = 2;
const c = 3;

// best
// const [a, b, c] = [1, 2, 3];







/*

key point:
	1. ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些命令，就会报错。

*/


// var tmp = 123;

// if (true) {
//   tmp = 'abc'; // ReferenceError
//   let tmp;
// }


//closure
function f1() {
  let n = 5;
  if (true) {
      let n = 10;
  }
  console.log(n); // 5
}
f1();



function f() { console.log('I am outside!'); }
(function () {
  if(false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());




/*
ES5规定，所有全局变量都是全局对象的属性。

ES6规定，var命令和function命令声明的全局变量，属于全局对象的属性；let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。
*/

