# 数组&对象的相关的操作

目录

+ [数组](#数组的基础用法)
  + [浅赋值](#浅赋值)
  + [深度赋值](#深度赋值)
+ [对象](#对象)
+ [常规的方法使用对比](#常规的方法使用对比)
  + [for vs for-in vs for-of vs forEach vs map](#循环方法对比)
+ [类数组](#类数组)

## 数组的基础用法

+ 栈和队列：pop,push & shift() unshift()
+ 转换：concat()合并数组，join()合并成字符串
+ 排序从小到大：sort() resort()逆序排列。sort()，默认是按照字符串编码顺序排列，而不是数字大小
+ 复制&截取：slice()
+ 删除，插入，替换:splice

### 浅赋值

改变原数组

+ push
+ pop
+ shift
+ unshift
+ sort
+ slice
+ splice

### 深度赋值

不改变原数组，生成新数组

+ concat
+ join
+ slice

## 对象的基本用法

+ is
+ keys

## 常规的方法使用对比

<<<<<<< HEAD
### 循环方法对比

#### for 循环
=======
### for vs for-in vs for-of vs forEach vs map

for 循环
>>>>>>> basic (+3 squashed commits)

+ 可以打断，配合 `break`
+ 无返回值

<<<<<<< HEAD
#### forEach
=======
forEach
>>>>>>> basic (+3 squashed commits)

+ 不可打断
+ 无返回值

<<<<<<< HEAD
```js
// 对于古董浏览器，如IE6-IE8
if (typeof Array.prototype.forEach != "function") {
  Array.prototype.forEach = function (fn, context) {
    for (var k = 0, length = this.length; k < length; k++) {
      if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
        fn.call(context, this[k], k, this);
      }
    }
  };
}
```

#### map
=======
map
>>>>>>> basic (+3 squashed commits)

+ 不可打断
+ 有返回值，返回一个新数组，
  
<<<<<<< HEAD
#### for-in ：遍历可枚举属性（包括原型链的属性）
=======
for-in ：遍历可枚举属性（包括原型链的属性）
>>>>>>> basic (+3 squashed commits)

+ 不适合遍历数组，数组遍历不一定按次序访问元素
+ 可以配合break使用
  
<<<<<<< HEAD
#### for-of：遍历可迭代对象  
=======
for-of：遍历可迭代对象  
>>>>>>> basic (+3 squashed commits)

+ 可以由break, throw  continue 或 return 终止
+ 不可迭代`object`对象
  
可迭代对象：
  
+ String, Array, TypedArray, Map and Set 是所有内置可迭代对象， 因为它们的原型对象都有一个 @@iterator 方法.
+ 自定义 generator函数

### join

将数组中的所有的元素都转化为字符串并联系在一起,返回最后生成的字符串.

可以指定一个可选的字符串在生成的字符串中来分割数组的各个元素.默认为逗号(,)

String.split()的逆运算.

### slice

返回一个指定数组的一个片段或者子数组,接受两个参数,分别代表开始与结束

截取数组片段

### splice

在数组中插入或删除元素的通用方法.返回一个由修改后的数组.

### push pop

可以将数组当做栈使用.实现栈的先进后出

push在数组尾部添加一个或者多个元素

pop删除数组的最后一个元素

### shift unshift

在数组的头部进行操作,实现队列的相关操作.

unshift 在数组头部添加一个或者多个元素

shift 在数组头部删除第一个元素

### toString(), toLocalString()

转为字符串

### filter

返回的数组元素是调用的数组的一个子集.

filter()会跳过稀松数组中缺少的元素,它的返回值总是稠密的.可以通过以下的方法.

```js
arr.filter(function(){
  return ture;
})

```

filter()**压缩空间并删除undefined与null**

```js

arr.filter(function(x){
  return x !== undefined && x!== null
})

```

兼容低版本

```js

if (typeof Array.prototype.filter != "function") {
  Array.prototype.filter = function (fn, context) {
    var arr = [];
    if (typeof fn === "function") {
       for (var k = 0, length = this.length; k < length; k++) {
          fn.call(context, this[k], k, this) && arr.push(this[k]);
       }
    }
    return arr;
  };
}

```

### reduce && reduceRight

指定的函数将数组元素进行组合,生成单个值.

```js
[].reduce(function(previousValue, currentValue, index, array){
  return previousValue + currentValue;
},initValue);

```

回调函数第一次执行时，previousValue 和 currentValue 可以是一个值，如果 initialValue 在调用 reduce 时被提供，那么第一个 previousValue 等于 initialValue ，并且currentValue 等于数组中的第一个值；如果initialValue 未被提供，那么previousValue 等于数组中的第一个值，currentValue等于数组中的第二个值

未给赋初始值

```js
var arr = [1,2,3,4,5];
var sum = arr.reduce(function(a,b){
  console.log('a----',a);
  console.log('b',b);
  return a+b
});
console.log(sum)

/**
 * 返回的结果作为第一个参数的回调
 *
 */

```

给赋初始值

```js
var arr = ['a', 'b', 'c', 'd', 'a', 'a', 'b', 'c'];
var ii =arr.reduce(function (p, k, index, array) {
  return p[k] ? (p[k]++) : (p[k] = 1), p;
},{});

console.log(ii)

/**
 * reduce 接受一个对象{}最为初始值，每次执行的结果作为p的回调结果继续执行，一直到最后一个k结束
 *
 * return 顺序执行，先判断对象有没有这个属性，没有就赋值为1，有了就加1，最后返回p继续回调
 */

```

## 类数组

```js
var my_object = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  length : 5
};

```
