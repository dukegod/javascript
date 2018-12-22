# call, apply, bind

主要用来改变this的指向问题与参数的传递

## call, apply的基本属性与之对应的使用场景

1. 不传，传入null,传递undefined， 函数中的this指向window对象，在node中为“global”
2. 传递一个对象，函数中的this指向这个对象
3. 传递另一个函数的函数名，函数中的this指向这个函数的引用
4. 传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象(如 String、Number、Boolean)

### call apply 使用场景

#### 利用上文第三个属性可以用来作类型检测

可以通过`toString()` 来获取每个对象的类型，由于原型链存在所以，都会继承`Object.toString`方法，如：

```js
function isNumber(s) {
  return Object.prototype.toString.call(s) === '[object Number]'
}
```

#### 类数组转成数组

+ 可以实现`arguments`参数转为数组
+ dom节点转为数组

```js
Array.prototype.slice.call()
```

ES6 新增一个数组方法`Array.from()`可以很方便的数组的转换，推荐使用


#### 利用第三个属性, 构造函数的继承

具体原型链详见[JavaScript 原型链]()

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.out = function() {};
function Student(name, age, id) {
  Person.call(this, name, age);
  this.id = id;
}
Student.prototype.output = function() {};
```


### `call`, `apply` 深入篇

`call`的实现，还是从`call`拥有哪些属性或者实现了什么方法的角度，这样就比较好实现对一个方法的重写或者实现。

具体的方法与功能我们在上面已经介绍了，通多对象的属性的动态增加实现重写，`call`, `apply`的实现思路基本一致，直接给出代码：

```js
Function.prototype.callWheel = function (thisAry) {
  // 处理调用的对象，我们对于null，undefined，window或者nodejs环境都采用{}处理
  let context = thisAry || {};
  // this指向调用者，也就是案例中的a
  context.fn = this;

  // 缓存返回值result用来对于一些return的处理
  // 参数的处理直接使用es6语法
  const result = context.fn(...arguments);

  // 删除对象的属性
  delete context.fn;
  return result;
}

function a(){
  console.log(arguments);
  console.log(this); //输出函数a中的this对象
}
var b = {} //定义函数b
a.callWheel(b, 9999)
```

## bind

最大的区别是：bind在实现改变函数this的同时又不会自动执行目标函数，还可以提供参数的传入，这样新创建的函数即可以拥有绑定函数的属性与方法又可以参数传递

以下总结来自伟大的[mozilla-bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

+ 绑定函数
+ 偏函数
+ 配合`setTimeout`
+ 作为构造函数使用的绑定函数
+ 快捷调用

注意点[ecma-bind](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-function.prototype.bind):

1. 使用Function.prototype.bind创建的函数对象是外来对象。 他们也没有原型属性。

```js
const bound = (function(){}).bind();
console.log(bound instanceof Function);   // true
console.log(!("prototype" in bound));     // false
```

2. 如果Target是箭头函数或绑定函数，那么传递给此方法的thisArg将不会被后续调用F使用。

    也许你会被人问题，一个函数连续链式绑定，最终返回值的问题。只会返回最开始绑定的参数。

```js
function example() { "use strict"; console.log(this); }
const bound = example.bind("Hello");
const boundAgain = bound.bind("World");
console.log(bound(), boundAgain()); // Hello Hello

function makeArrow() { "use strict"; return () => console.log(this); }
const arrow = makeArrow.call("Hello");
const boundArrow = bound.bind("World");
console.log(arrow(), boundArrow()); // Hello Hello
```

3. 对于bind的实现，MDN实现的确实很好，其实主要的考虑就是要`new`的实例对象带来的原型链的丢失的问题。以下代码来自MDN:

```js
Function.prototype.bindWheel = function(oThis) {
  //  判断调用者是不是函数
  if (typeof this !== 'function') {
    // internal IsCallable function
    throw new TypeError(
      'Function.prototype.bind - what is trying to be bound is not callable'
    );
  }

  //  手里参数
  var aArgs = Array.prototype.slice.call(arguments, 1);

  // 调用者缓存
  var fToBind = this;

  // 空函数
  var fNOP = function() {};

  //
  var fBound = function() {
    // this instanceof fNOP === true时,说明返回的fBound被当做new的构造函数调用
    //  这个类型检测比较重要
    return fToBind.apply(
      this instanceof fNOP ? this : oThis,
      // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
      aArgs.concat(Array.prototype.slice.call(arguments))
    );
  };

  // 维护原型关系, 也就是把Point的原型
  if (this.prototype) {
    // Function.prototype doesn't have a prototype property
    fNOP.prototype = this.prototype;
  }
  // 下行的代码使fBound.prototype是fNOP的实例,因此
  // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
  fBound.prototype = new fNOP();

  return fBound;
};

// test

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ',' + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'
var emptyObj = {};

//  YAxisPoint 没有prototype
var YAxisPoint = Point.bindWheel(emptyObj, 0);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'
axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // true
```

### 参考文档

[Implement your own — call(), apply() and bind() method in JavaScript](https://blog.usejournal.com/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b)

[mozilla-bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
