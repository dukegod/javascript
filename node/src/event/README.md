# 事件循环

[简述事件执行顺序问题](http://www.jianshu.com/p/12b9f73c5a4f)

### setImmediate() vs setTimeout()区别

```
// timeout_vs_immediate.js
setTimeout(function () {
  console.log('globle timeout');
}, 0);

setImmediate(function () {
  console.log('globle immediate');
});

// timeout_vs_immediate.js
var fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('fs timeout');
  }, 0);
  setImmediate(() => {
    console.log('fs immediate');
  });
});

```

结论： 

+ 如果两者都在主模块（main module）调用，那么执行先后取决于进程性能，即随机。
+ 如果两者都不在主模块调用（即在一个 IO circle 中调用），那么setImmediate的回调永远先执行


### process.nextTick() vs setImmediate()

结论：

+ process.nextTick()立即在本阶段执行回调；
+ setImmediate()只能在 check 阶段执行回调。

### nextTick, setTimeout 以及 setImmediate

执行顺序和Event Loop的

```
setImmediate(function () {
  console.log(1);
}, 0);
setTimeout(function () {
  console.log(2);
}, 0);

new Promise(function (resolve) {
  console.log(3);
  resolve();
  console.log(4);
}).then(function () {
  console.log(5);
});
console.log(6);

process.nextTick(function () {
  console.log(7);
});
console.log(8);

```

macro-task: script (整体代码)，setTimeout, setInterval, setImmediate, I/O, UI rendering.
micro-task: process.nextTick, Promise(原生)，Object.observe，MutationObserver

除了script(整体代码) ，可以理解为待执行的所有代码。
micro-task的任务优先级高于macro-task的任务优先级。

所以执行顺序如下：

第一步. script整体代码被执行，执行过程为

创建setImmediate macro-task 
创建setTimeout macro-task 
创建micro-task Promise.then 的回调，并执行script console.log(3); resolve(); console.log(4); 此时输出3和4，虽然resolve调用了，执行了但是整体代码还没执行完，无法进入Promise.then 流程。 
console.log(6)输出6 
process.nextTick 创建micro-task 
console.log(8) 输出8  
第一个过程过后，已经输出了3 4 6 8  

第二步. 由于micro-task 的 优先级高于micro-task。  
此时micro-task 中有两个任务按照优先级process.nextTick 高于 Promise。  
所以先输出7，再输出5 

第三步，micro-task 任务列表已经执行完毕，家下来执行macro-task. 由于setTimeout的优先级高于setIImmediate，所以先输出2，再输出1。 

整个过程描述起来像是同步操作，实际上是基于Event Loop的事件循环。 

关于micro-task和macro-task的执行顺序，可看下面这个例子(来自《深入浅出Node.js》)：

```js
// 加入两个nextTick的回调函数
process.nextTick(function () {
  console.log('nextTick延迟执行1');
});
process.nextTick(function () {
  console.log('nextTick延迟执行2');
});
// 加入两个setImmediate()的回调函数
setImmediate(function () {
  console.log('setImmediate延迟执行1');
	// 进入下次循环
  process.nextTick(function () {
  console.log('强势插入');
});
});
setImmediate(function () {
  console.log('setImmediate延迟执行2');
});

console.log('正常执行');

```

新版的Node中，process.nextTick执行完后，会循环遍历setImmediate，将setImmediate都执行完毕后再跳出循环。所以两个setImmediate执行完后队列里只剩下第一个setImmediate里的process.nextTick。最后输出"强势插入"。

**关于优先级的另一个比较清晰的版本：**

观察者优先级

在每次轮训检查中，各观察者的优先级分别是：

idle观察者 > I/O观察者 > check观察者。

idle观察者：process.nextTick

I/O观察者：一般性的I/O回调，如网络，文件，数据库I/O等

check观察者：setImmediate，setTimeout


[优先级执行顺序](https://github.com/fwon/blog/issues/36)
[event-loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)