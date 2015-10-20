
// 第一种方案： 构造函数添加方法属性

function Person(id){
	this.id = id;
	this.say = function(){
		console.log('inner:' + this.id);
		return this.id;
	}
}

var p1 = new Person('11');
var p2 = new Person('22');

console.log(p1.say());
console.log(p2.say());
console.log(p1.say == p2.say);

// output::
// inner:11
// 11
// inner:22
// 22
// false

// 这样构造函数，每个实例都是一个不同的函数实例，所以就会导致say（）不一样。
// 建议把函数的定义放在构造函数的外面
//

//  优化

function Person(id){
	this.id = id;
	this.say = say;
}

function say(){
		console.log('inner:' + this.id);
		return this.id;
}

var p1 = new Person('11');
var p2 = new Person('22');

console.log(p1.say());
console.log(p2.say());
console.log(p1.say == p2.say);

// output:
// inner:11
// 11
// inner:22
// 22
// true


// 进一步优化，用原型链

function Person(id){
	this.id = id;
}
Person.prototype.say = function(){
	console.log('inner:' + this.id);
		return this.id;
}

var p1 = new Person('11');
var p2 = new Person('22');

console.log(p1.say());
console.log(p2.say());
console.log(p1.say == p2.say);

// output:
// inner:11
// 11
// inner:22
// 22
// true


