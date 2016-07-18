'use strict';
var obj = {
	m: function(){
		var self = this;
		console.log(this === obj); // true， refer to obj
		fun();

		function fun(){
			console.log(this);
			console.log(this === obj); // false; refer ro global obj or undefined
			console.log(self === obj); // true ; self pointe to obj
		}
	},
	k: 'liuhui'
}
console.log(obj.k);
obj.m();
