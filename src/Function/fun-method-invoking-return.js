'use strict';

var obj = {
	m: function(){
		var self = this;
		console.log(this === obj); // 此时的this指向这个对象O

		return (function(){
			console.log(this === obj); // false; 此时的this指向全局对象或者undefined
			console.log(self === obj); // true ,self 还是指向外部的o对象
		})()
	}
}
obj.m();