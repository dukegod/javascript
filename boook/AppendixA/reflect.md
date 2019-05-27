# Reflect

*Reflect*没有构造函数。你不能将其与一个new运算符一起使用，或者将Reflect对象作为一个函数来调用。
*Reflect*的所有属性和方法都是静态的，类似*Math*

## 注意点

`set`方法中传入`reciver`,`this`的指向为`reciver`
```js
Reflect.set(target, key, valuem reviver)
```
