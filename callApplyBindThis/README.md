# Call Apply Bind This

如果第一个参数为null或者undefined的话，那么，实际上绑定到的是全局对象，即global。这一点对三者都适用。

改变this指向

## call, apply 方法

（1） 不传，或者传null,undefined， 函数中的this指向window对象，在node中为“undefined”

（2） 传递另一个函数的函数名，函数中的this指向这个函数的引用

（3） 传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象，如 String、Number、Boolean

（4） 传递一个对象，函数中的this指向这个对象

## bind 方法

ES5引入bind的真正目的是为了弥补call/apply的不足，由于call/apply会对目标函数自动执行，从而导致它无法在事件绑定函数中使用，因为事件绑定函数不需要我们手动执行，它是在事件被触发时由JS内部自动执行的。而bind在实现改变函数this的同时又不会自动执行目标函数


## 其他的用处

### 使用toString()方法来检测对象类型

可以通过toString() 来获取每个对象的类型。

为了每个对象都能通过 Object.prototype.toString() 来检测，需要以 Function.prototype.call() 或者 Function.prototype.apply() 的形式来调用，把需要检测的对象作为第一个参数传入。

### 类数组转成数组 


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


[ref1](https://segmentfault.com/a/1190000003959359)

[回味JS基础:call apply 与 bind](https://segmentfault.com/a/1190000004568767)

[call/apply的理解与实例分享](https://segmentfault.com/a/1190000003977826)

[ apply, call ,bind 环境解析 ](http://www.cnblogs.com/onepixel/p/5143863.html)
