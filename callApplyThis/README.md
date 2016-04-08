# Call Apply Bind

如果第一个参数为null或者undefined的话，那么，实际上绑定到的是全局对象，即global。这一点对三者都适用。



## 其他的用处

### 使用toString()方法来检测对象类型

可以通过toString() 来获取每个对象的类型。
为了每个对象都能通过 Object.prototype.toString() 来检测，需要以 Function.prototype.call() 或者 Function.prototype.apply() 的形式来调用，把需要检测的对象作为第一个参数传入。