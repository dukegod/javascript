// 
//构造函数中，继承的方法
//
//1， apply ， call
//
//2, 改变构造函数的属性constructor指向。


function Person(name){
	this.name = name;
};

Person.prototype.com = function(){
	console.log('我们拥有一个世界！');
}

function Son(name,id){
	Person.call(this,name);
	this.id = id;
}
// 重新方法
Son.prototype.com = function(){
	console.log(this.name +':::'+ this.id + ': can think ');
}

var p = new Person('person');
p.com();
var s = new Son('son','student');
console.log(Object.getOwnPropertyNames(Son.prototype));
s.com()

