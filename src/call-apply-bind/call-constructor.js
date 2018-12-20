//
//构造函数中this的指向问题
//

//this在构造函数中可以当作全局的属性
//this指向新生成的实例
// apply call this指向调用的上一级

Function.prototype.applyWheel = function (thisAry) {
  let context = thisAry || {};
  context.fn = this;
  const result = context.fn(...arguments);
  delete context.fn;
  return result;
}

Function.prototype.callWheel = function (thisAry) {
  // 缓存this对象，调用的对象
  let context = thisAry || {};
  context.fn = this;
  // 缓存返回值
  const result = context.fn(...arguments);
  delete context.fn;
  return result;
}



function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.out = function() {
  console.log(this);
  console.log(this.name + ':' + this.age);
};

function Student(name, age, id) {
  // Person.applyWheel(this,[name,age]);//或是用apply都行
  Person.callWheel(this, name, age);
  this.id = id;
}
Student.prototype.output = function() {
  console.log(this.name + ':' + this.age + ';' + this.id);
};

new Person('lh', 18).out();
new Student('KK', 18, 'XUESHENG').output();
