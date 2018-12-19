# new 关键字

`new` 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

执行`new`之后都发生了什么？

+ 创建了一个新对象
+ 改变 `_proto_` 的指向构造函数的原型
+ 改变`this`的指向


```js
function Person(name) {
  this.name = name || 'Person'
}
Person.prototype.showName = function (params) {
  console.log(this.name)
}
const person = new Person('personperson')
console.log(person);


//  与下面的作用相同
var person = {};
person._proto_ = Person.prototype;
Person.call(person, "personperson");
```
