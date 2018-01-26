只允许实例化一次的对象类，通过一个命名空间管理规划对象上的属性和方法。

### 优点

- 环境中只存在一个命名空间，防止方法的冲突与覆盖，符合js只存在唯一的全局变量规范
- 节约内存资源
- 方便模块化调用

<!-- more -->

#### 命名空间的管理

环境变量中只存在一个全局变量，this指向当前对象，并进行上下文属性与方法的传递。

```js
var nameSpace = {
  name: 'Liuhui',
  showName: function(){
    console.log('name', this.name);
  },
  modifyName: function(name){
    this.name = name;
    this.showName(this.name);
  }
};

console.log(nameSpace.name);
nameSpace.showName();
nameSpace.modifyName('dukegod');

```


### 主题函数

#### 使用构造函数

```js
var Singleton = (function () {

  var _instance = null;

  var Person = function (name, age, nation) {
    console.log('person is not a one');
    this.name = name;
    this.age = age;
    this.nation = nation;
  };
  Person.prototype = {
    init: function () {
      console.log(this.name + ':age:' + this.age + ' nation ' + this.nation);
    },
    getName: function (name) {
      console.log(this.name);
    },
    setName: function (name) {
      this.name = name;
    }
  };

  return function(){
      if (_instance === null) {
        _instance = new Person('duke', 18, 'china');
      }
      return _instance;
    }();
})();

console.log(Singleton);

console.log(Singleton.name);

Singleton.init();
```

#### 使用函数对象

```js
var Singleton = (function() {
  var _instance = null;

  function Single() {
    return {
      name: 'Liuhui',
      showName: function(name) {
        console.log(this.name);
      },
      modifyName: function(name) {
        this.name = name;
        this.showName(this.name);
      }
    };
  }

  //  返回的函数自动执行，直接返回了属性与方法
  return (function() {
    if (!_instance) {
      _instance = Single();
    }

    return _instance;
  })();
})();

console.log(Singleton); // { name: 'Liuhui', showName: [Function], modifyName: [Function] }
console.log(Singleton.name);
Singleton.showName();
Singleton.modifyName('dukegod');

```




