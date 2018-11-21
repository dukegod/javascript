# new

+ Rest(剩余)/Spread(展开) 属性
+ Asynchronous iteration （异步迭代）
+ 正则表达式改进
  - 正则表达式的 ‘s’ 标志, 单行匹配

### Promise

##### Promise.prototype.finally()

finally() 是 Promise 新增的一个实例方法，允许在 resolve 或 reject 之后运行回调，以便清理相关资源。finally 回调没有任何参数，而且无论如何都会被执行。

##### `for-await-of`
允许我们在循环中调用返回 promise（或 promise 数组）的异步函数。循环在执行下一步之前会等待每个 Promise 完成。
