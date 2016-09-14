### 避免空比较

null不作为检测对象，如果需要检测使用===，与！==检测

### typeof

基本类型的检测：string，number，boolean，undefined, Symbol

函数检测: 最好的方法就是使用typeof，可以跨帧（frame）使用

```
console.log(typeof(11));
console.log(typeof(false));
console.log(typeof('aiiai'));
var i;
console.log(typeof(i));
var sy = Symbol();
console.log(typeof(sy));
function typeType(){}
console.log(typeof(typeType));

// output:

// number
// boolean
// string
// undefined
// symbol
// function
```

### instanceof

typeof用来检测基本类型可以，检测引用值有点力不从心。好多类型都会报出为object。

#### 检测引用类型

检测常见的引用类型

```
console.log({} instanceof Object);
console.log([] instanceof Array);
var date = new Date();
console.log(date instanceof Date);
```

#### 检测原型

```
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
```

### in / hasOwnProperty()

检测对象属性的判断

```
var obj = {
  title: 'lh'
};

if('title' in obj){
  console.log(obj.title);
}

if(obj.hasOwnProperty('title')) {
  console.log(this);
}
```

###  Object.prototype.toString

终极方法，toString是object原型对象上一个方法，放回其调用者具体的类型。

```
function isType(e){
  console.log(Object.prototype.toString.call(e).split(' ')[1].slice(0,-1).toLocaleLowerCase());
  return Object.prototype.toString.call(e).split(' ')[1].slice(0,-1).toLocaleLowerCase();
}
```
