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

最大的区别是：bind在实现改变函数this的同时又不会自动执行目标函数

以下总结来自伟大的[mozilla-bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

+ 绑定函数
+ 偏函数
+ 配合`setTimeout`
+ 作为构造函数使用的绑定函数
+ 快捷调用

注意点[ecma-bind](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-function.prototype.bind):

+ 通过`Function.prototype.bind`创建的对象，没有`prototype`原型
+ 当被绑定对象为箭头函数或者被函数包裹的对象，不能被子类继承（因为上下文被锁定了）
