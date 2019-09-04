# 对象

读书笔记：<<JavaScript 面向对象精要>>

## 目录

- 对象基本概念
  - [属性定义](#属性定义)
  - [属性检测](#属性检测)
  - [删除属性](#删除属性)
  - [属性冻结](#属性冻结)
  - [属性枚举](#属性枚举)
  - [属性类型](#属性类型)
    - 数据类型
    - 访问器类型
- 构造函数与原型对象
  - [原型对象](#原型对象)
- 继承
  - [构造函数](#构造函数)
  - 原型链
- 对象模式

### 属性定义

- 对象字面量形式
- Object 构造函数形式

### 属性检测

- in: 会检查自有属性与原型属性
- hasOwnProperty： 只检测自有属性
- Reflect.has： 等同于`in`

```js
var person = {
  name: ''
};
console.log('name' in person);
console.log(person.hasOwnProperty('name'));
console.log(Reflect.has(person, 'name'));
```

### 删除属性

正如属性可以在任何时候被添加到对象上，它们也可以在任何时候被移除。但设置一个属性的值为 null 并不能从对象中彻底移除那个属性，只是调用[[Set]]将 null 值替换了该属性原来的值而已。你需要使用 delete 操作符来彻底移除对象的一个属性。

`delete` delete 操作符仅对自有属性起作用，你无法删除一个对象的原型属性

```js
var obj = {
  name: '91'
};
console.log(obj.name);
console.log(obj.toString);
delete obj.name;
delete obj.toString;
console.log(obj.name);
console.log(obj.toString);
```

### 属性冻结

- freeze :
- seal ： 限制属性的添加与删除
- preventExtensions : 限制属性的扩展

### 属性枚举

对于自身属性与原型属性的是否会遍历的问题

- Object.keys
- for-in

### 属性类型

属性有两种类型：数据属性和访问器属性。数据属性包含一个值。访问器属性不包含值而是定义了一个当属性被读取时调用的函数（称为 getter）和一个当属性被写入时调用的函数（称为 setter）。访问器属性仅需要 getter 或 setter 两者中的任意一个，当然也可以两者都有。

### 构造函数

构造函数就是你用 new 创建对象时调用的函数。到目前为止，你已经见过好几次内建的 JavaScript 构造函数了，例如，Object、Array 和 Function。使用构造函数的好处在于所有用同一个构造函数创建的对象都具有同样的属性和方法。如果想创建多个相同的对象，你可以创建自己的构造函数以及引用类型。

### 原型对象

可以当做所有的对象的基类

#### `__proto__`

每一个对象的实例都有一个`__proto__`属性，指向`Object.prototype`，从而继承对象的属性与方法，这个也是 js 面向对象的核心思想

#### 构造函数中使用原型对象

- 工厂模式创建原型对象
- 对象字面量方式创建原型字面量

### 原型链
