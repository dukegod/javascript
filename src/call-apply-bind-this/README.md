# Call, Apply, Bind

主要用来改变this的指向问题与参数的传递

## call, apply的基本方法

+ 不传，传入null,传递undefined， 函数中的this指向window对象，在node中为“global”
+ 传递另一个函数的函数名，函数中的this指向这个函数的引用
+ 传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象，如 String、Number、Boolean
+ 传递一个对象，函数中的this指向这个对象

## bind 基本方法

最大的区别是：bind在实现改变函数this的同时又不会自动执行目标函数

## 使用场景

### 使用toString()方法来检测对象类型

可以通过`toString()` 来获取每个对象的类型如：。

```js
function isNumber(s) {
  return Object.prototype.toString.call(s) === '[object Number]'
}
```

### 类数组转成数组

+ 可以实现`arguments`参数转为数组
+ dom节点转为数组

```js
Array.prototype.slice.call()
```

## 深入篇


# this

this的指向大致可以分为以下4类：

+ 作为对象的方法调用
+ 作为普通函数调用
+ 构造器调用
+ Function.prototype.call或Function.prototype.apply调用
+ 立即执行函数


## 立即执行函数

立即执行函数中this指向为window。

```
var name = 'outer';

(function () {

    var name = 'inner';
    console.log(name);          // inner
    console.log(this.name);     // outer
})();

```

### 各种样式的立即执行函数

```

(function(){
    console.log('no name');
})();

(function(){
    console.log('no name')
}());

-function(){
    console.log('no name');
}();

+function(){
    console.log('no name');
}();

~function(){
    console.log('no name');
}();

!function(){
    console.log('no name');
}();

```

### 应用场景

#### 1 你可以用立即执行的函数表达式**暴露公开的成员或方法**

也就是说，cal可以直接调用return 的方法，为cal的属性和方法

```
var cal = (function () {

    return {

        add: function (a,b) {
            return a + b;
        },
        sub: function (a,b) {
            return a - b;
        }
    }
})();

cal.add(5,2)   // 7
cal.sub(4,1)   // 3

```
或者这么写也行

```
var cal = (function () {

    var way = {};

    way.add = function (a,b) {
        return a + b;
    };
    way.sub = function (a,b) {
        return a - b;
    };

    return way;
})();

cal.add(3,6)   // 9
cal.sub(8,5)   // 3

```

#### 2 续写子模块

```
cal.controller = (function () {

    var way = {};

    var result;
    way.set = function (args) {
        result = args;
    }

    way.get = function () {
        return result;
    }

    return way;
})();

cal.controller.set(123);
cal.controller.get();   //  123

```


