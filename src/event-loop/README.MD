---
title: 事件运行机制 
date: 2016-02-10
tags: [JavaScript]
---

关键知识点：

+ js单线程
+ 事件循环机制
+ job, job-task, microtasks, macrotasks, 宏任务, 微任务
+ setTimeout执行机制
+ promise 执行机制

关于事件的运行机制，网上有很多的文章介绍，大部分人感觉把浏览器的机制与在nodejs中的运行机制搞混了，整个文章有点让人茫然。

### 单线程

javascript 是单线程，一个时间只能做一件事情；

多线程实践，HTML5提出Web Worker，允许js创建多个线程，但子线程完全受主线程控制。

### 事件循环运行机制

堆： 对象被分配在一个堆中，一个用以表示一个内存中大的未被组织的区域。

也就是说任务需要一个接一个的按顺序执行，这是因为JS作为浏览器端的脚本语言其开始主要用途还是与用户互动和操作DOM，假如JS有两个线程，一个添加DOM一个删除DOM，这就势必会出现不可预期的后果，所以说还是单线程更适合，但是这种方式有一个弊端，就是必须要等待前一个程序执行完毕才执行下一个，所以将程序分为了两类：同步任务和异步任务。

+（1）所有同步任务都在 **主线程** 上执行，形成一个 **执行栈**（execution context stack）。

+（2）主线程之外，还存在一个 **"任务队列"**（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

+（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

+（4）主线程不断重复上面的第三步。

只要主线程空了，就会去读取"任务队列"，这就是JavaScript的运行机制。这个过程会不断重复。

执行顺序图：

![image](https://pic1.zhimg.com/80/v2-494fce6f4658b4d97e0d1f7c96ea3f08_hd.jpg)

从这张图中我们可以看到其中有宏任务（MacroTask）和微任务（MicroTask）之分,我们来说下这个宏任务与微任务。  

宏任务(MacroTask)包括：
+ *setTimeout22
+ *setInterval
+ UI 渲染
+ I/O

微任务(MicroTask)包括：
+ *Promise
+ *MutaionObserver

MutationObserver: MO是HTML5中的新API，是个用来监视DOM变动的接口。他能监听一个DOM对象上发生的子节点删除、属性修改、文本内容修改等等;

JavaScript引擎首先从macrotask queue中取出第一个任务，执行完毕后，将microtask queue中的所有任务取出，按顺序全部执行；  
然后再从macrotask queue中取下一个，执行完毕后，再次将microtask queue中的全部取出；
循环往复，直到两个queue中的任务都取完。
    
也就是说：当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。


### setTimeout执行机制

setTimeout(fn, delay), `setTimeout`的执行时间永远大于等于delay的时间，还取决于是不是主线程还有其他的事件阻塞异步事件的执行。例如我们可以添加一个`sleep`函数阻塞主线程.

```js
function sleep(delay) {
  const start = new Date()*1;
  while (new Date()*1 - start < delay) {
    continue;
  }
}
function task(t) {
  const t2 = new Date()*1;
  console.log('等待了多久多久', t2 - t);
}
console.log(1);
var time = new Date()*1;
setTimeout(()=>{
  task(time);
}, 1000);
sleep(5000)
```

运行以上代码，我们发现，实际执行的时候，并没有在1秒以后得到我们想要的结果，而是等了差不多5秒多时间，就是因为主线程上有阻塞，主线程一直不为空，异步队列就没有办法执行，只能等待。

### promise执行机制



### 具体事例分析

```js
setTimeout(function () {
    console.log(200);
}, 200);

setTimeout(function () {
    console.log(100);
}, 100);

setTimeout(function () {
    console.log(500);
}, 500);

new Promise(function(resolve){
    console.log(2);
    resolve(3);
}).then(function(val){
    console.log(val);
})

console.log(99999)
```
// 2,99999,3,100,200,500


参考文档：

[JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)  
[Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！](https://chuckliu.me/#!/posts/58bd08a2b5187d2fb51c04f9)  
[这一次，彻底弄懂 JavaScript 执行机制](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650585345&amp;idx=1&amp;sn=6fd112fbed64246601b48e392d1e7a0b&source=41#wechat_redirect)
[promise 事件机制](https://github.com/creeperyang/blog/issues/21) 
