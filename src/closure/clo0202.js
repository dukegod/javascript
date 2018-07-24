'use strict';
function createrFunctions(){
	let result = [];

	for(let i=0; i < 10 ;i++){
		result[i]= (function(){
			console.log(i);
		})
	}
	console.log(result instanceof Array);// true
	console.log(result[2] instanceof Function); // true
	return result;
}

let dd = createrFunctions();

console.log(dd instanceof Array); // true 数组

dd.forEach(function(f){f()})// 循环每一个数据，把数据作为行参传导匿名函数中，并且执行


// 	用es6 输出1，2，3，，，9
// 