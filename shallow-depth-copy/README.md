深拷贝和浅拷贝是只针对Object和Array这样的复杂类型的

### 浅拷贝

按照**引用传递**的方式进行拷贝，改变一个，另一个也跟随者变化；

Object.assign()拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。

```js
function test() {
  'use strict';

  let obj1 = { a: 0 , b: { c: 0}};
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
  
  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
  
  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}
  
  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}
  
  // Deep Clone
  obj1 = { a: 0 , b: { c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
}
test();
```

### 深拷贝

肯定是**按值传递**，保证对象的绝对独立

#### 数组
实现的方法：
+ slice()
+ concat()

#### 对象

######  `JSON.parse()` 能实现深度拷贝，但是有一下缺点

+ 无法实现对函数的，正则的等特殊的对象的克隆
+ 会抛弃对象的constructor，所有的构造函数会指向Object
+ 对象有循环引用，会报错

##### 自我实现一个简单的算法

```js
function depthCopy(obj) {
  let result = {};
  for (let i in obj) {
    if ( isTypeObject(obj[i]) === 'object' ) {
      result[i] = depthCopy(obj[i])
    } else {
      result[i] = obj[i]
    }
  }
  return result
}
```

#### 参考文档

[mozilla](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
[请你实现一个深克隆](https://juejin.im/post/5abb55ee6fb9a028e33b7e0a?utm_source=gold_browser_extension#heading-3)