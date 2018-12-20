# this


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




