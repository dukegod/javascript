
// 原型连问题

// var Person = function(){};

// console.log(typeof Person);
// console.log(Person.prototype);
// console.log(Person.prototype.constructor);



var Person = function(name){
	this.name = name;
};
Person.prototype.common = function(){
	console.log('person common prototype');
}
var person = new Person('duke');
var person2 = new Person('duke2');
console.log(person.constructor);
console.log(person.constructor == Person);


console.log(typeof Person);
console.log(Person.prototype);
console.log(Person.prototype.constructor == Person);
console.log('...ddd...');
console.log(typeof person);
console.log(person.prototype);
console.log(person.prototype.constructor);


