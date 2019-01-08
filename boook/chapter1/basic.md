# 数据结构

## 数据类型

### 基本数据类型

+ String
+ Number
+ Boolean
+ Undefined
+ NULL
+ Symbol

### 对象类型：

+ Object
+ Function
+ Array

### 类型判断：

+ typeof
+ instanceof
+ Object.prototype.toString.call()

`typeof` 在对于null, 数组, 对象上判断不准确，引出来另外一个类型判断`instanceof`可以用来区分数组与对象。   
`Object.prototype.toString.call()` 借助js原型链继承，每一个对象有拥有`toString`默认方法，可以返回默认的类型，作为最终的类型判断

```js
typeof null // object
typeof undefined // undefined 

[] instanceof Array  // true
{} instanceof Object // true 

Object.prototype.toString.call(null)  // [object Null]
Object.prototype.toString.call(undefined);  //"[object Undefined]"
```
