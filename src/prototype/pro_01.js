
// 原型连问题
//
// 实例方法的constructor指向构造方法
//
// 构造方法的属性的constructor指向构造方法
//
var Person = function(name){
	this.name = name;
};
Person.prototype.common = function(){
	console.log('person common prototype');
};
var person = new Person('duke');
console.log(person.constructor);
console.log(person.constructor === Person);

console.log(typeof Person);
console.log(Person.prototype);
console.log(Person.prototype.constructor === Person);
console.log('...ddd...');
console.log(typeof person);
console.log(person.prototype);
console.log(person.prototype.constructor);
