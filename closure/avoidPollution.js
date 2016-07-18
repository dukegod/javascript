'use strict';
function A(){
	var i = 0;
	function B(){
		i++;
		console.log('inner---',i);
	}
	return B;
}
var C = A();
console.log(C);

C();

// console.log(C());

