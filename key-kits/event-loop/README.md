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

浏览器的event loop至少包含两个队列，`macro-task`队列和`micro-task`队列。关于这两个概念详细见[HTML系列：macrotask和microtask](https://zhuanlan.zhihu.com/p/24460769)

+ macro-task: setTimeout, setInterval, 
[setImmediate](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate), I/O, UI rendering.
+ micro-task: Promise，[MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)

![loop](//img11.360buyimg.com/devfe/jfs/t1/9098/16/8553/85027/5c0e42e2E14f06ba2/5cffa76c9069263a.png)


:::
注意点：
+ 创建 `Promise`是同步任务，`promise.then()`是异步任务
+ ES2015规范: `micro-task` 等同 `job queue`， `macro-task`等同 `task queue`
+ setImmediate浏览器基本上不支持
:::


### nodejs 环境





[阮一峰](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)   
[Event Loop的规范和实现](https://juejin.im/post/5a6155126fb9a01cb64edb45?utm_source=gold_browser_extension#heading-1)    
[Node.js源码解析：深入Libuv理解事件循环](https://zhuanlan.zhihu.com/p/35039878)    
[从一道Promise执行顺序的题目看Promise实现](https://zhuanlan.zhihu.com/p/34421918?utm_medium=social&utm_source=ZHShareTargetIDMore)    
[]()    
[]()    
[]()    
