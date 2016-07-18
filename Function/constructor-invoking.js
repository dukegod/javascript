'use strict';
// 构造函数
function Person(name,age){
	this.name=name;
	this.age=age;
	this.common();// 自动执行函数
}

Person.prototype.out=function(){
	var self=this;
	console.log(this.name+':'+this.age);
	function dd(){
		console.log(this); // undefined 或者 全局对象（window）
		console.log(self); //  Person { name: 'lh', age: 18 },指向实例对象
		console.log(this === Person); // false
		console.log(self === Person);  // false
	};
	dd();
}
Person.prototype.common = function(){
	console.log('common sense!!');
}

function Student(name,age,id){
	// Person.call(this,name,age);
	Person.apply(this,[name,age]);//或是用call都行
	this.id=id;
}
Student.prototype.output=function(){
	var self=this;
	console.log(this.name+':'+this.age+';'+this.id);
}

var person = new Person('lh',18);
// person.out();
// var student = new Student('KK',18,'XUESHENG').output();

console.log(Person.constructor);
console.log(Person.prototype);

console.log('person');
console.log(person.constructor);
console.log(person instanceof(Person));
console.log(person.prototype);



