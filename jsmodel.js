// js设计模型
;function Man(name,age){
	this.name=name;
	this.age=age;
	console.log("message:"+name+":"+age);
}

function Child(name,age,status){
	Man.call(this,name,age);
	this.status =status;
}
Man.prototype.eat = function(){
	/* body... */
	console.log("message  can eat");
};
Child.prototype.eat = function(){
	/* body... */
	console.log("message  can child");
};


var man = new Man('duke','18');
man.eat();

var child = new Child('D','4','NO');
child.eat();


// 字面量
var man ={
	name: 'duke',
	age: '18',
	status: 'no sex',
	eat: function(){
		console.log("eat a lot");
	}
}

// var manm = new man();
console.log(man.name);
console.log(man.eat());
