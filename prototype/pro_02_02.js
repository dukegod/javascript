//
//
//构造函数
//
//原型链
//

function Person(name){
	this.name = name;
};

Person.prototype.com = function(){
	console.log('我们拥有一个世界！');
}

function Son(name,id){
	this.id = id;
}

Son.prototype = new Person();
// 重写方法
Son.prototype.com = function(){
	console.log(this.name +':::'+ this.id + ': can think ');
}

var p = new Person('person');
p.com();
var s = new Son('son','student');
s.com()

console.log(Object.getOwnPropertyNames(Son.prototype));
console.log(Son instanceof Person);
console.log(Son instanceof Function);
console.log(Son.prototype.constructor == Person);

console.log(Person instanceof Person);
console.log(Person instanceof Function);
console.log(Person.prototype.constructor == Person);
