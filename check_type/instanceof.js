// 实例对象的检测
//
console.log({} instanceof Object);
console.log([] instanceof Array);
var date = new Date();
console.log(date instanceof Date);

var Person = function(){};
Person.prototype.showName = function(){};
var p = new Person();
console.log(p instanceof Person);
console.log(Person.prototype);
console.log(Person.constructor === Function); // 构造函数的constructor指向Function
console.log(p.constructor === Person); // 实例函数的constructor指向构造函数
console.log(p.prototype);

console.log('Child');
var Child = function(){};
Child.prototype = Person.prototype; // 继承Person
Child.prototype.constructor = Child; // 实例对象constructor重新指向Child
var ch = new Child();
console.log(ch instanceof Child);
console.log(Child.prototype);
console.log(Child.constructor === Function);
console.log(ch.constructor === Person);
console.log(ch.constructor === Child);
console.log(ch.prototype);
