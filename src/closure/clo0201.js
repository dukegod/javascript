
function createrFunctions(){
	var result = [];

	for(var i=0; i < 10 ;i++){
		result[i]= (function(k){
			console.log(k);
			return k;
		})(i);
	}

	console.log(typeof result[2]); // number

	return result;
}

var dd = createrFunctions();
console.log(dd);

console.log(dd instanceof Array); // true 数组

// dd.forEach(function(f){f()})

// 用立即执行函数，此时result 存储的是数值，result 返回的数值组。