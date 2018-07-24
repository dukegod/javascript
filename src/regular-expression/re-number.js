'use strict';

let aa = 199999;

var arr = [1,2,3,4,5];
var outArr = [];
arr.forEach(function(e){
	if (e > 3) {
		// statement
		console.log(e);
		outArr.push(e);
		return outArr;
	}
})

console.log(outArr);
