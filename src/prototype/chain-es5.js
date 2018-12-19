function Person(name, age){
  this.name = name,
  this.age = age
}
Person.prototype.showName = function(){
	console.log(this.name);
};
var person1 = new Person('pson', 18);
var person2 = new Person('pson2', 19);

// 继承
function Son(name, age, number){
  Person.call(this, name, age)
  this.number = number;
}
Son.prototype = Object.create(Person.prototype)
Son.prototype.constructor = Son;
var son = new Son('son', 10, 1000)


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
