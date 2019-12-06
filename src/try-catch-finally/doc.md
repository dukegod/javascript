# try

js 异常捕获错误。

常见的js错误来源：

+ Error 构造函数创建
+ throw
+ 内部错误（语法错误，引用错误，属性错误）

捕获方法

+ window 监听 error事件
+ try-catch

### try-catch

只能捕获同步任务执行的错误，不能捕获异步执行错误

如何在异步代码中捕获错误

#### setTimeout

因为事件机制的原因，在不同的处理事件队列中，等setTimeOut执行的时候，try早就执行完毕了

#### promise

promise.catch 可以用来捕获上层的错误信息与reject信息

promise.catch() 等同于 promise.then(undefined, onFailStatue)

也可以在每一个then中添加 `try-catch`进行捕获，但是比较的麻烦事情

#### async

try-catch 可以直接在async中使用，让异步的错误捕获更加的简单明了，但是内部的实现原理，也是通过封装Promise
然后按步骤的执行异步错误

[深入理解JavaScript的错误](https://www.infoq.cn/article/wkuLQZZ8qYKK4sloczx5)
[捕获异步错误信息](https://juejin.im/post/5cc15de5e51d456e68659340#heading-4)
