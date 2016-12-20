

function Person(){}

Person.prototype.name = 'duke come from prototype';
Person.prototype.age = 20;
Person.prototype.sayName = function(){
	console.log(this.name);
};

var person1 = new Person();

var person2 = new Person();

function Son(){}
Son.prototype = new Person();

// ifPrototypeOf() 判断对象之间是否存在关系
console.log(Son.isPrototypeOf(Person));// false
console.log(Person.prototype.isPrototypeOf(person1));//ture
//获取内部的属性
console.log(Object.getPrototypeOf(person1));


person1.name = 'instance';

console.log(person1.name);
console.log(person2.name);

// hasOwnProperty(),可以检测属性在实例中，还是在原型中。
console.log(person1.hasOwnProperty('name'));// ture 在实例中
console.log(person2.hasOwnProperty('name'));// false 在原型中

// in 检测,无论在原型还是在实例中都可以检测出来
console.log('name' in person1); // ture
console.log('name' in person2); // ture
