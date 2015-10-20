//
//
// 最优化的方式 组合使用构造函数和原型
//  构造函数实例属性，原型上实现方法和共享属性

// 私有的属性
function Person(name,age){
	this.name = name;
	this.age = age;
	this.hobby = ['basketball','football']
}

// 共享的属性，方法
Person.prototype = {
	constructor: Person, //由于prototype 重新写了，此时constructor 不再指向 Person了,可以手动的设置
	say: function(){
		console.log('say function!');
	}
}

var person1 = new Person('james',18);
var person2 = new Person('lebron',19);
console.log(person1.hobby);
console.log(person2.hobby);

person1.hobby.push('vollyball');
console.log(person1.hobby);
console.log(person2.hobby);

// 由于prototype 重新写了，此时constructor 不再指向 Person了
console.log(Person.prototype.constructor == Person); // false
// 可以手动的设置
Person.prototype.constructor == Person;
console.log(Person.prototype.constructor == Person); // false

