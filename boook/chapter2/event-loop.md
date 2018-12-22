# 事件循环

js是*单线程*的语言，一次只能执行一个任务。有了事件循环（同步任务与异步任务）的*执行机制*，让js大发神威。

## js的引擎

+ 谷歌浏览器的V8引擎的构造

  - Memory Heap--内存分配区
  - Call Stack--代码运行时栈

+ Nodejs

:::
注意点：

+ 执行栈
+ 虽然`Google Browser`与`nodejs`都是`V8`引擎，但是实际的`runtime`还是有区别的，不能认为是一个统一的概念
+ js的执行机制为：`同步执行`+`异步执行`
:::


## 执行机制

单线程意味着一次只能执行一个任务，遇到耗时的业务这样就带来阻塞问题，js把带来阻塞的放在异步任务中，这样就分为：`同步任务与异步任务`,同步任务放在主线程上
执行，异步任务不进入主线程，而进入"任务队列"（task queue）等待被主线程回调（callback）。
只有当主线程的执行栈为空的时候，才会去调用任务队列，任务队列按照*先进先出*的顺序执行。js就是按照这个顺序不断循环执行，也就是js的*事件循环的
执行机制*

![task-loop](//img14.360buyimg.com/devfe/jfs/t1/22000/30/947/125791/5c0e2ffbE32dc43ab/57a69433a6bddd93.png)

:::
注意点：

"回调函数"（callback），就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。
:::

### 浏览器环境

#### 1. 先从最初浏览器执行顺序开始

最开始浏览器中的异步执行包括：

+ 定时器函数如`setTimeout`,`setInterval`
+ webAPI如 `ajax`,`click`...

![even-lopp](//www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png)

主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在"任务队列"中加入各种事件（click，load，done）。
只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次*执行那些事件所对应的回调函数*。

关于堆栈：

+ 栈(stack): 操作系统在建立某个进程时或者线程为这个线程建立的存储区域，该区域具有*先进后出*的特性
+ 堆(Heap): 是应用程序在运行的时候请求操作系统分配给自己内存，一般是申请/给予的过程。
由于从操作系统管理的内存分配所以在分配和销毁时都要占用时间，所以用堆的效率低的多！但是堆的好处是可以做的很大

主线程的执行按照`栈`执行，异步回调按照`队列`执行。

:::
注意点：

消息队列（`message task`）等同于任务队列（`tasks`）
:::

#### 2. es6的发布以及新的异步函数`promise`

浏览器的event loop至少包含两个队列，`macro-task`队列和`micro-task`队列。关于这两个概念详细见[HTML系列：macrotask和microtask](https://zhuanlan.zhihu
.com/p/24460769)。这两个队列中包含如下方法：

+ macro-task: setTimeout, setInterval,
[setImmediate](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate), I/O, UI rendering.
+ micro-task: Promise.then，[MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)

执行的顺序如下图：

![loop](//img11.360buyimg.com/devfe/jfs/t1/9098/16/8553/85027/5c0e42e2E14f06ba2/5cffa76c9069263a.png)

其中`Promise.then`的的实现原理[详见这篇文章](https://zhuanlan.zhihu
.com/p/34421918?utm_medium=social&utm_source=ZHShareTargetIDMore),清晰的说明了promise如何处理内部事件的执行顺序。

:::
注意点：
+ 创建 `Promise`是同步任务，`promise.then()`是异步任务
+ ES2015规范: `micro-task` 等同 `job queue`， `macro-task`等同 `task queue`
+ setImmediate浏览器基本上不支持
+ [mutationobserver](https://dom.spec.whatwg.org/#mutationobserver) 是对`dom`节点变化的监听
:::


### nodejs 环境

与浏览器不同的，nodejs底层采用的是`Libuv`的事件机制，并且引入了`process.nextTick`与`setImmediate`这两个事件,下图就是nodejs的事件机制。

```
┌───────────────────────────┐
┌─>│           timers          │ ---- setTimeout, setInterval
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │ ---- 这个阶段执行几乎所有的回调。但是不包括close事件，定时器和setImmediate的回调。
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │ ---- setImmediate()
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │ ---- data.on('close', ()=>{})
   └───────────────────────────┘
```
对于`Libuv`的机制看了相关的代码还是不太明白（感觉需要好好学习下C++）。

`nodejs`的任务队列可以分为如下

+ macro-task:  setTimeout, setInterval, I/0, fs, setImmediate, close
+ micro-task:  promise.then, process.nextTick(严格说可以不再这个范围中，下文说明)

具体的循环图可以看下面这张图：

![cbgfq-bh310](//img14.360buyimg.com/devfe/jfs/t1/15384/30/1113/265651/5c0f54fbE36cd3b5e/65f486d238601311.png)

#### 重点概念的区别

##### setImmediate() vs setTimeout()

setImmediate() 与 setTimeout() 一个是来自于poll阶段之后，一个之前。具体执行的顺序取决于执行环境。

1. 都是在主线程中执行，取决于系统的环境

```js
// timeout_vs_immediate.js
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});
```
输出的结果可能会不一致，取决于进程的性能。

2. 在 I/O 操作中，执行顺序是一致的

setImmediate 的回调就总是优先于 setTimeout 的回调

```js
// timeout_vs_immediate.js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout'); // 后执行
  }, 0);
  setImmediate(() => {
    console.log('immediate'); // 先执行
  });
});
```

综合1，2案例，从相关的[源码](https://github.com/libuv/libuv/blob/v1.x/src/unix/core.c#L350)了解到`Libuv`事件循环中，poll之后就是check阶段，而
`setImmediate`较`timer`会先执行。

##### `setImmediate` vs `Process.nextTick` vs `promise`

+ `setImmediate`: 会在后续的循环中执行，这个方法是`nodejs`官网推荐使用的，兼容性好，易于理解
+ `Process.nextTick`: 会在当前的循环中*立即*执行

从[async-wrap.cc#L241](https://github.com/nodejs/node/blob/32f6098eef/src/async-wrap.cc#L241), [node.js#L48](https://github.com/nodejs/node/blob/32f6098eef/src/node.js#L48)
中可以查看`nodejs`中，`micro-task`执行顺讯永远在`Process.nextTick`以后，其中`micro-task`就包括`promise`，所以上文说，严格意义上说，`Process.nextTick`可以
不放在`micro-task`中，但是把他俩都作为`micro-task`中是为了区别`macro-task`。

```js
//无论你怎么调整Promise和nextTick的顺序，永远输出的是1和2
Promise.resolve().then(() => console.log(2))
process.nextTick(() => console.log(1))
//Promise.resolve().then(() => console.log(2))放在这里也一样
```

整体上说明：

Node 规定，process.nextTick和Promise的回调函数，追加在本轮循环，即同步任务一旦执行完成，就开始执行它们。
而setTimeout、setInterval、setImmediate的回调函数，追加在次轮循环

一次循环的执行先后顺序：

主线程 > process.nextTick > micro-task[promise.then] > macro-task


[阮一峰](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
[Event Loop的规范和实现](https://juejin.im/post/5a6155126fb9a01cb64edb45?utm_source=gold_browser_extension#heading-1)
[Node.js源码解析：深入Libuv理解事件循环](https://zhuanlan.zhihu.com/p/35039878)
[The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
[nodejs源码-事件循环](https://yjhjstz.gitbooks.io/deep-into-node/content/chapter5/chapter5-1.html)
[javascript事件循环（浏览器端、node端）](https://juejin.im/post/5c0cb3acf265da61362248f3)
