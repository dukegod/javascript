# 数据结构

## 目录

+ [基本数据类型](#基本数据类型)
  + 6种基本类型
  + undefined与null的区别
+ [对象类型](#对象类型)
+ [类型判断](#类型判断)
  + typeof
  + instanceof
  + Array.isArray
  + Object.prototype.toString.call()
+ [算数运算](#算数运算)
+ [比较运算](#比较运算)
  + 特殊运算符 NAN, -0, +0
+ [运算符优先级](#运算符优先级)

### 基本数据类型

+ String
+ Number
+ Boolean
+ Undefined
+ NULL
+ Symbol

#### undefined与null的区别

+ null 表示没有值，真实的空，函数或者对象标识为null，便于垃圾回收释放内存
+ undefined 可能是缺省，或者还没有定义

#### 判断一个数值是不是为null的最佳方法

直接用null进行判断

```js
console.log(value===null);
```

### 对象类型

又名引用类型

+ Object
+ Function
+ Array

### 类型判断

+ typeof
+ instanceof
+ Array.isArray
+ Object.prototype.toString.call()

`typeof`可以用来判断String，Number，Boolean，Undefined，在对于null, 数组, 对象上判断不准确  
`instanceof`可以用来区分数组与对象  
`Object.prototype.toString.call()` 借助js原型链继承，每一个对象有拥有`toString`默认方法，可以返回默认的类型，作为最终的类型判断

```js
typeof null // object
typeof undefined // undefined

[] instanceof Array  // true
{} instanceof Object // true

Object.prototype.toString.call(null)  // [object Null]
Object.prototype.toString.call(undefined);  //"[object Undefined]"
```

#### instanceof 原理分析

instanceof 主要判断构造函数的prototype属性是否出现在对象的原型链中，通过不断的溯源一个实例对象的`__proto__`的指向判断一个实例是不是构造函数原型(constructor.prototype)的对象

```js
[] instanceof Array // true
[] instanceof Object // true
[].__proto__ === Array.prototype // true
[].__proto__ === Object.prototype // false
[].__proto__.__proto__ === Object.prototype // true
```

在js中一起都是对象，故而最终都是`Object`的原型对象

#### Array.isArray

用来检测数组，是es5新增的方法，内部是通过`Object.prototype.toString`实现兼容处理

### 算数运算

true 转为 1，false 转为 0

```js
// Boolean + Number -> addition
true + 1 // 2

// Boolean + Boolean -> addition
false + false // 0

// Number + String -> concatenation
5 + 'foo' // "5foo"

// String + Boolean -> concatenation
'foo' + false // "foofalse"

// String + String -> concatenation
'foo' + 'bar' // "foobar"

Infinity * 0 // NaN
Infinity * Infinity // Infinity
'foo' * 2 // NaN
```

### 比较运算

+ 严格比较运算符: '==='
+ 转换类型比较运算符: '=='

对于`==`会先执行类型转化

如果操作数的类型不同，则按照这样的情况来判断:

+ null和undefined相等
+ 其中一个是数字，另一个是字符串，则将字符串转换为数字，在做比较
+ 其中一个是true，先转换成1(false则转换为0)在做比较
+ 如果一个值是对象，另一个是数字/字符串，则将对象转换为原始值(通过 toString()或者 valueOf()方法)
+ 其他情况，则直接返回false

大致为：`==` 操作符会自动将 0，‘ ’（空字符串），null，undefined 转成布尔型false，然后进行比较

```js
0 == ' '  // true
null == undefined // true
[1] == true // true
```

#### 严格比较运算符

如果操作数的类型不同，则不进行值的判断，直接返回 false 如果操作数的类型相同，分下列情况来判断:

+ 都是数字的情况，如果值相同，则两者等同(有一个例外，就是 NaN，NaN 与其本身也不相等，+ 0 与 -0 的逻辑判断也有问题)，否则不等同
+ 都是字符串的情况，与其他程序设计语言一样，如果串的值不等，则不等同，否则等同
+ 都是布尔值，且值均为true/false，则等同，否则不等同
+ 如果两个操作数引用同一个对象(数组，函数)，则两者完全等同，否则不等同
+ 如果两个操作数均为null/undefined，则等同，否则不等同

漏掉的为：

```js
+0 === -0 // true，但我们期待它返回false
NaN === NaN // false，我们期待它返回true
```

综上一个，react源码有个判断两个值是不是相等的判断

```js
/* eslint-disable */
Object.is = Object.is || function (x, y) {
  if (x === y) {
    // 用来处理+0 与 -0
    return x !== 0 || 1 / x === 1 / y
  }
  // 处理 NaN的情况
  return x !== x && y !== y
}

function shallowEqual (obj1, obj2) {
  if (obj1 === null && obj2 === null) {
    return true
  }
  if (obj1 === null || obj2 === null) {
    return false
  }
  if (Object.is(obj1, obj2)) {
    return true
  }
  const obj1Keys = obj1 ? Object.keys(obj1) : []
  const obj2Keys = obj2 ? Object.keys(obj2) : []
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }

  for (let i = 0; i < obj1Keys.length; i++) {
    const obj1KeyItem = obj1Keys[i]
    if (!obj2.hasOwnProperty(obj1KeyItem) || !Object.is(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false
    }
  }

  return true
}

```

### 运算符优先级

常用的运算符：

圆括号 > ++, -- > 乘，除，取模 > 加减 > 大,小,等于 > & > ^> | > 条件运算 > 赋值运算 > 展开（...）> 逗号

#### 参考文档

+ [undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)
