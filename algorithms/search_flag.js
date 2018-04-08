/*
* 给定有序数组，从中找出指定数字下标，如果没找到，返回-1
*@dukegod  2016/1/12
*/
"use strict";
Array.prototype.searchIndex = function(n){
	/* body... */
	var result = [],
			i,
			l= this.length;
			// console.log(l);
	for( i= 0; i< l; i++){
		if(this[i] == n){
			result.push(i);
		}
	}
	if(result.length == 0){
		result.push(-1);
	}
	return result;
};


 var arr = [1,2,5,5,5,5,5,6,9];
console.log(arr.searchIndex(5));//[2,3,4,5,6]
console.log(arr.searchIndex(0));