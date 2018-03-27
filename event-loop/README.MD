---
title: 事件运行机制 
date: 2016-02-10
tags: [JavaScript]
---

[JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)

javascript 是单线程，一个时间只能做一件事情；

多线程实践，HTML5提出Web Worker，允许js创建多个线程，但子线程完全受主线程控制。

### 运行机制

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
+ *setImmediate
+ *setTimeout
+ *setInterval

微任务(MicroTask)包括：
+ *process.nextTick
+ *Promise
+ *MutaionObserver
    
在单次的迭代中，event loop首先检查MicroTask队列，如果有一个MicroTask等待执行，那么执行该任务。
当该任务执行完毕后（或者MacroTask队列为空），event loop继续执行MacroTask队列。（V8 中 Microtask 默认是自动运行的）。