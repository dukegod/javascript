
//
// 组合继承
// 解决引用类型原型的问题

function Person(name,age){
	this.name = name;
	this.age = age;
	this.hobby = ['b','f','v'];
}

Person.prototype.sayName = function(){
	console.log(this.name + ':' + this.age);
};

function Son(name,age,id){
	// 继承属性
	Person.apply(this,[name,age]);
	this.id = id;
}
// 继承方法
Son.prototype = new Person();
// 解决原型指向问题。否则就指向Person了。 好像咩有很大的用处。
Son.prototype.constructor = Son;

Son.prototype.showId = function(){
	console.log(this.name + ':' + this.age +':'+ this.id);
};

var person1 = new Person('first-name',18);
var person2 = new Person('second-name',19);
person1.sayName();
person2.sayName();
// 引用类型
person1.hobby.push('table');
console.log(person1.hobby);
console.log(person2.hobby);

console.log(Person.prototype);
console.log(Person.prototype.constructor);

var son1 = new Son('first-son',1,'baby');
var son2 = new Son('second-son',2,'child');
son1.sayName();
son2.sayName();
son1.showId();
son2.showId();
console.log(Son.prototype);
console.log(Son.prototype.constructor);

console.log(Person.prototype.isPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(son1));


//out:
// first-name:18
// second-name:19
// [ 'b', 'f', 'v', 'table' ]
// [ 'b', 'f', 'v' ]
// Person { sayName: [Function] }
// [Function: Person]
// first-son:1
// second-son:2
// first-son:1:baby
// second-son:2:child
// Son {
//   name: undefined,
//   age: undefined,
//   hobby: [ 'b', 'f', 'v' ],
//   constructor: [Function: Son],
//   showId: [Function] }
// [Function: Son]
// true
// true
