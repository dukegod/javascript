'use strict';

var a = {
	name: 'liuhui',
	sayName : function(){
		console.log( '来自a的数据组合::' + this.name);
	}
}

function ab(name){
	console.log('ab-self::----' + name);
	console.log('ab-this::----' + this.name);
	this.sayName();
}


ab.call(a,'callname');


// ab调用a，this指向 a；

// ab('ab');
