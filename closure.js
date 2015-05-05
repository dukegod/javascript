// closure  独立性
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

// 闭包保存的是整个变量对象
//不太明白的地方
function createrFunctions(e){
	var result = new Array(e);

	for(var i=0; i < 10 ;i++){
		result[i]= function(){
			return i;
		}
	}

	return result;
}
var dd = createrFunctions();
console.log(dd);

console.log("next function");
//another add niming

function createrFunctions2(){
	var result2 = new Array();
	for (var i = 0; i < 10; i++) {
		result2[i]=function(num){
			return function(){
				return num;
			};
		}(i);
	};
	return result2;
	console.log(num);
}

console.log(createrFunctions2());


