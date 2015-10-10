//
// 闭包中的变量不能被垃圾回收。一致存在内存中
//


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