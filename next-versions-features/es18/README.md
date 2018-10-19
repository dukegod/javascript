es18新特性
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

### Promise

##### Promise.prototype.finally()
   
finally() 是 Promise 新增的一个实例方法，允许在 resolve 或 reject 之后运行回调，以便清理相关资源。finally 回调没有任何参数，而且无论如何都会被执行。

##### `for-await-of`
允许我们在循环中调用返回 promise（或 promise 数组）的异步函数。循环在执行下一步之前会等待每个 Promise 完成。
