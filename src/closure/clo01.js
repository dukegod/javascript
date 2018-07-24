/*
* 希望这个变量一直保存在内存中但又不会“污染”全局的变量，这个时候，我们就可以用闭包来定义这个模块。
*/

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