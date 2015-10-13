// clo02.js
function createrFunctions(e){
	var result = new Array(e);

	for(var i=0; i < 10 ;i++){
		result[i]= (function(){
			console.log(i);
		})
	}
	console.log(result instanceof Array);// true
	console.log(result[2] instanceof Function); // true
	return result;
}

var dd = createrFunctions();

console.log(dd instanceof Array); // true 数组

dd.forEach(function(f){f()})// 循环每一个数据，把数据作为行参传导匿名函数中，并且执行

//输出 10 个10 

// 这个时候result 中储存的是 函数，
// 由于存在暂时死亡区，js在for循环中都储存，但没有立即执行,例如下面的，即使你设定了0，但也不会立即执行。

for(var ii = 0; ii<=3; ii++){
	setTimeout(function(){
		console.log('i:'+ ii);
	}, 0);
}

// 输出3个 i：4

// 解决方案：
// 1， 立即执行函数  clo0201.js
// 2， 用es6        clo0202.js
//
//

