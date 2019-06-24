# 值传递与引用传递与数据深浅拷贝

+ 值传递
+ 引用传递
+ 数据拷贝

## 值传递 vs 引用传递

javascript中的参数传递都采用 按值传递的方式

+ 对于对象，数组来说，这个值是指对象的内存地址，这个值存在堆中，这个也就是所谓的*引用传递*
+ 对基本类型，这个值是原始值，这个值存在栈中

### 基本类型

```js
var a = 6
var b = a;

a = 7;
console.log(a, b)
```

a,b 存在一个不同的内存中，只是把的一个副本复制给另一个变量b，
然后在内存中存在各自的副本，所以不会相互影响的,所以修改a，并不会带来b的改变

### 引用类型

数组，对象，函数在赋值或者传递的时候创建一个引用拷贝，指向同一个内存

```js
var a1 = [1,2]
var b1 = a1;
a1.push(3)
console.log(a1);
console.log(b1);
// [1,2,3]
// [1,2,3]
b1 = [234]
console.log(a1);
console.log(b1);
// [1,2,3]
// [234]
```

如果我们修改b的内容，b的指向变化了，重新指向一个新的地址，这种情况也叫做*变异*

之前看到过一个这样的问题, javascript 连等赋值问题

```js
var a = {n:1}
var b = a;
a.x = a = {n:2}

console.log(a)
console.log(a.x)
console.log(b)
console.log(b.x)

out:
{ n: 2 }
undefined
{ n: 1, x: { n: 2 } }
{ n: 2 }
```

关键点：

+ 运算符的优先性，`.`运算符优先性大于赋值运算
+ 赋值运算符从右往左运算

### 数据拷贝

+ JSON.stringify
+ Object
+ ...

```js
var a = {
  x: 1,
  y: 2
}
var b = JSON.stringify(a);
a.z = 3

console.log(a)
console.log(b)

```

```js
var a = {
  x: 1,
  y: 2
}
var b = Object.assign({}, a);
a.z = 3

console.log(a)
console.log(b)

```

```js
var obj1 = { foo: 'bar', x: 42 };
var clonedObj = { ...obj1 };
console.log(clonedObj)

```

#### 参考

[segmentfault 问题](https://segmentfault.com/q/1010000003023316?_ea=4756282)  
[javascript 连等赋值问题](https://segmentfault.com/q/1010000002637728)  
