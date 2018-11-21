es18新特性

字符串填充（padStart 和 padEnd）
Object.values
Object.entries
Object.getOwnPropertyDescriptors()
函数参数列表和调用中的尾随逗号
Async Functions (异步函数)
共享内存 和 Atomics


### String（字符串）

##### String.prototype.padStart
允许将空字符串或其他字符串追加或前置到原始字符串的开头
##### String.prototype.padEnd
允许将空字符串或其他字符串追加或前置到原始字符串的尾部


### async/await


### 共享内存和原子
将某种多线程特写引入到 JavaScript 中，让 JS 开发人员可以自己管理内存，编写高性能的并发程序。

这是通过一个叫作 SharedArrayBuffer 的全局对象来实现的，这个对象实质上将数据存储在共享内存中。因此，这些数据可以在主 JS 线程和 Web 工作线程之间共享。


### Object

剩余运算符...（三个点）允许我们提取尚未提取的 Object 属性。

`...`创建新对象

```js
const obj1 = {
  apple: 9
}
const obj2 = {
  banana: 10
}

const newObj = {...obj1, ...obj2}
```


##### Object.value:
它会返回 Object 所有属性的值，但不包括原型链中的值。

##### Object.entries
与 Object.keys 相关，但它不仅返回键，而是以数组的方式返回键和值。这使得在循环中使用**对象或将对象转换为 Map** 等操作变得非常简单。

##### Object.getOwnPropertyDescriptors
这个方法返回给定对象所有属性的详细信息（包括 get 和 set 方法）;
允许将一个对象浅复制 / 克隆到另一个对象，同时也复制 getter 和 setter 函数。
`Object.assign`将浅复制除原始源对象的 getter 和 setter 函数之外的所有东西。

###### `Object.assign` 和 `Object.getOwnPropertyDescriptors` 以及 `Object.defineProperties` 将原始对象复制到新对象的区别



