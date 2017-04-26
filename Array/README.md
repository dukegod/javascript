## 数组命名

字面量命名发法则：

var arr = []

## 数组的基础用法：

+ 栈和队列：pop,push & shift() unshift()
+ 转换：concat()合并数组，join(",")合并成字符串
+ 排序从小到大：sort() resort()逆序排列。sort()，默认是按照字符串编码顺序排列，而不是数字大小
+ 复制&截取：slice(0)
+ 删除，插入，替换:splice
+ 队列操作:

改变原数组的方法是 pop push shift unshift sort splice

不改变原数组的方法是 concat join slice


### join

将数组中的所有的元素都转化为字符串并联系在一起,返回最后生成的字符串.

可以指定一个可选的字符串在生成的字符串中来分割数组的各个元素.默认为逗号(,)

String.split()的逆运算.

### reverse

数组中的元素颠倒顺序

### sort

排序,默认是按照字母排序的.可以通过传入参数进行比较.

传入匿名函数比较好,只用一次罢了.

### concat

链接数组

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

### foreach

遍历数组

不能在中间使用break语句,想要终止只有使用 try-catch

```

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

### map

```
[].map(function(value, index, array){});

```
兼容IE8以下

```
if (typeof Array.prototype.map != "function") {
  Array.prototype.map = function (fn, context) {
    var arr = [];
    if (typeof fn === "function") {
      for (var k = 0, length = this.length; k < length; k++) {
         arr.push(fn.call(context, this[k], k, this));
      }
    }
    return arr;
  };
}

```

### filter

返回的数组元素是调用的数组的一个子集.

filter()会跳过稀松数组中缺少的元素,它的返回值总是稠密的.可以通过以下的方法.

```
arr.filter(function(){
	return ture;
})

```

filter()压缩空间并删除undefined与null

```

arr.filter(function(x){
	return x !== undefined && x!== null
})

```

兼容低版本

```

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

### every some

对数组元素应用指定的函数进行判定,返回true或false

every: 每一个都要符合条件

向下兼容

```
if (typeof Array.prototype.every != "function") {
  Array.prototype.every = function (fn, context) {
    var passed = true;
    if (typeof fn === "function") {
       for (var k = 0, length = this.length; k < length; k++) {
          if (passed === false) break;
          passed = !!fn.call(context, this[k], k, this);
      }
    }
    return passed;
  };
}

```

some: 有一个符合条件就行

```
if (typeof Array.prototype.some != "function") {
  Array.prototype.some = function (fn, context) {
	var passed = false;
	if (typeof fn === "function") {
   	  for (var k = 0, length = this.length; k < length; k++) {
		  if (passed === true) break;
		  passed = !!fn.call(context, this[k], k, this);
	  }
    }
	return passed;
  };
}

```

### ruduce reduceRight

指定的函数将数组元素进行组合,生成单个值.

```
[].reduce(function(previousValue, currentValue, index, array){
  return previousValue + currentValue;
},initValue);

```

回调函数第一次执行时，previousValue 和 currentValue 可以是一个值，如果 initialValue 在调用 reduce 时被提供，那么第一个 previousValue 等于 initialValue ，并且currentValue 等于数组中的第一个值；如果initialValue 未被提供，那么previousValue 等于数组中的第一个值，currentValue等于数组中的第二个值


未给赋初始值

```
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

```
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


### indexOf 与 lastIndexOf

返回一个数组中是否有给定的参数

存在返回一个下标

不存在返回一个 '-1'

```

if (typeof Array.prototype.indexOf != "function") {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var index = -1;
    fromIndex = fromIndex * 1 || 0;

    for (var k = 0, length = this.length; k < length; k++) {
      if (k >= fromIndex && this[k] === searchElement) {
          index = k;
          break;
      }
    }
    return index;
  };
}


```


## 数组类型检测

intanceof Array

在es5中使用isAarry()

```
var arr = [];
console.log(arr instanceof Array);
console.log(Array.isArray(arr));

```

向下兼容

```
function typeOf(arg){
  'use strict';
  console.log(Object.prototype.toString.call(arg));
  return Object.prototype.toString.call(arg).match(/\[object\s(\w+)]/)[1];
}

```

## 类数组

```
var my_object = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  length : 5
};

```

2:  arguments

```
function convertArray(){
  return Array.prototype.slice.call(arguments);
}
var i = convertArray(1,2,3,4,5);
console.log(i);
```

3: 浏览器中的 nodeList

document.getElementsByTagName or document.querySelectorAll

## random.js 生成随机数，以及随机排序

[随机排序,洗牌](https://www.w3cplus.com/javascript/how-to-randomize-shuffle-a-javascript-array.html)

## 参考

[array 兼容性考虑](http://www.zhangxinxu.com/wordpress/2013/04/es5%E6%96%B0%E5%A2%9E%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95/#map)

[mozilla](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

