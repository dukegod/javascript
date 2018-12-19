# 原型链

## 原型

javascript 中一切皆对象，也就是说都是`object`的实例，也都有一个默认的原型指向`object.prototype`。感觉关于原型链这个还是图形比较好理解。

```js
const initObject = {
  name: 'initObject',
  showName: function(){
    console.log(this.name)
  }
}
```

![proto](https://raw.githubusercontent.com/dukegod/javascript/master/src/prototype/prototype.png)

从以上我们可以值，由于`initObject`的原型指向`Object`，所以我们可以直接使用`Object`相关的函数方法。
```js
initObject instanceof (Object)  // true
```

## 原型链

JavaScript中实现继承的方式，就是通过原型链实现的。 我们可以看一个构造函数的实例化的图解：

```js
function Person(name, age){
  this.name = name,
  this.age = age
}
Person.prototype.showName = function(){
	console.log(this.name);
};
var person1 = new Person('pson', 18);
var person2 = new Person('pson2', 19);
```

![chains](https://raw.githubusercontent.com/dukegod/javascript/master/src/prototype/prototype-chains.png)

从上图可以看出,原型链的上下文关系，最终肯定指向为`null`

### 原型链继承

```js
function Person(name, age){
  this.name = name,
  this.age = age
}
Person.prototype.showName = function() {
	console.log(this.name);
};
var person1 = new Person('pson', 18);
var person2 = new Person('pson2', 19);

// 继承
function Son(name, age, number){
  Person.apply(this, name, age)
  this.number = number;
}
Son.prototype = Object.create(Person.prototype)
Son.prototype.constructor = Son;
var son = new Son('son', 10, 1000)
```

需要注意的点：

+ 使用`Object.create()`把父类的原型对象赋值给子对象。如果直接用`new Person`的做法，可以会带来父类中`constrctor`定义的方法的执行等副作用。也就是只取`arguments`的第二个参数，详情见[using-object-create-instead-of-new](https://stackoverflow.com/questions/2709612/using-object-create-instead-of-new)
+ 创建的对象`constructor`一开始的指向不是`Son`，需要手动修改下。这样保持了`Son`原型链的完整性。


原型检测：

```js
Son.prototype.isPrototypeOf(son)   // true
```

### es6 原型

es6 引入了类的概念，底层的原理也是原型链的操作。

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 设置getter 方法
  get upperName() {
    return this.name.toUpperCase()
  }

  showName() {
    console.log(this.name);
  }
  showAge() {
    console.log(this.age);
  }
}

var person1 = new Person('pson', 18);
var person2 = new Person('pson2', 19);

```

在浏览器中输出，唯一的区别就是`person1.__proto__.constructor`指向的内容不一样，一个是函数，一个是类。

可以参考下`babel`如何处理

```js
"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

// 先进行检测，判断是不是类的实例

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = (function() {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [
    {
      key: "showName",
      value: function showName() {
        console.log(this.name);
      }
    },
    {
      key: "showAge",
      value: function showAge() {
        console.log(this.age);
      }
    },
    {
      key: "upperName",
      get: function get() {
        return this.name.toUpperCase();
      }
    }
  ]);

  return Person;
})();

var person1 = new Person("pson", 18);
var person2 = new Person("pson2", 19);

```
先建立一个构造函数，然后通过`Object.defineProperty`把原型与`setter`,`getter`方法通过遍历的方式定义到构造函数的原型上。

关于继承相关的es6代码：

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 设置getter 方法
  get upperName() {
    return this.name.toUpperCase()
  }

  showName() {
    console.log(this.name);
  }
  showAge() {
    console.log(this.age);
  }
}


var person1 = new Person('pson', 18);
var person2 = new Person('pson2', 19);

class Son extends Person {
  constructor (name, age, number) {
    super(name, age);
    this.number = number;
  }
  showNumber() {
    console.log(this.number);
  }
}
var son = new Son('son', 10, 1000);

```

经过babel转义的代码：

```js
"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

//  用来判断是不是调用了super方法
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

//  继承
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  //  与我们在前面说的 es5的继承原理一样，把父类的原型方法继承
  // 顺便把 constructor 的指向也改了
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  //  修改子类的_proto_指向，指向父类
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = (function() {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [
    {
      key: "showName",
      value: function showName() {
        console.log(this.name);
      }
    },
    {
      key: "showAge",
      value: function showAge() {
        console.log(this.age);
      }
    },
    {
      key: "upperName",
      get: function get() {
        return this.name.toUpperCase();
      }
    }
  ]);

  return Person;
})();

var Son = (function(_Person) {
  _inherits(Son, _Person);

  function Son(name, age, number) {
    _classCallCheck(this, Son);

    var _this = _possibleConstructorReturn(
      this,
      (Son.__proto__ || Object.getPrototypeOf(Son)).call(this, name, age)
    );

    _this.number = number;
    return _this;
  }

  _createClass(Son, [
    {
      key: "showNumber",
      value: function showNumber() {
        console.log(this.number);
      }
    }
  ]);

  return Son;
})(Person);

var person1 = new Person("pson", 18);
var person2 = new Person("pson2", 19);
var son = new Son("son", 10, 1000);

```

### typescript

对于js的高级语法，不得不说`typescript`，强大的静态语法，让书写js更加的类似静态语法，减少因为类型的定义带来的问题。对于类在`typescript`中是如何转译的，详细看下文：

```js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "upperName", {
        // 设置getter 方法
        get: function () {
            return this._name.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.showName = function () {
        console.log(this._name);
    };
    Person.prototype.showAge = function () {
        console.log(this._age);
    };
    return Person;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name, age, number) {
        var _this = _super.call(this, name, age) || this;
        _this._number = number;
        return _this;
    }
    Son.prototype.showNumber = function () {
        console.log(this._number);
    };
    return Son;
}(Person));
var person1 = new Person('pson', 18);
var person2 = new Person('pson2', 19);
var son = new Son('son', 10, 1000);

```

`typescript`在转译时候，对于原型的方法直接挂载，对于`getter`,`setter`方法则是通过`Object.defineProperty`进行挂载的。对于继承的做法`typescript`
也是自己通过自我实现的方法完成的，但是原理与`babel`差不多。

`(this && this.__extends)`是用来判断是不是存在`extends`方法，以免重复定义。然后依次判断浏览器支持的方法进行原型方法的拷贝，先判断是不是支持`setPrototypeOf`方法，然后判断是不是支持`_proto_`，最次通过for循环进行属性拷贝。

然后创建一个空函数，修改`constructor`的指向为父类，让子类的__proto__指向父类prototype。

相关的代码见[prototype](https://github.com/dukegod/javascript/tree/master/src/prototype)
