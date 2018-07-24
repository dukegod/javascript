装饰器（@）

![image](https://misc.aotu.io/Secbone/decorator/decorator_840x340.jpg)

JavaScript中装饰器使用特殊的语法，使用@作为标识符，且放置在被装饰代码之前。**可以作用于类，也可以作用于类的属性**

首先我们先来看一下关于 ES6 中的类吧

```js
class Cat {
    say() {
        console.log("meow ~");
    }
}
```

上面这段代码是 ES6 中定义一个类的写法，其实只是一个语法糖，而实际上当我们给一个类添加一个属性的时候，会调用到*Object.defineProperty*这个方法，它会接受三个参数：target 、name 和 descriptor ，所以上面的代码实际上在执行时是这样的：

```js
function Cat() {}
Object.defineProperty(Cat.prototype, "say", {
    value: function() { console.log("meow ~"); },
    enumerable: false,
    configurable: true,
    writable: true
});
```

好了，有了上面这段代码以后，我们再来看看装饰器在 JS 中到底是怎么样工作的吧！

### 修饰类

把整个函数作为参数传入到修饰器中，实现对类的添加属性，方法

### 修饰类的属性

通过*Object.defineProperty*进行扩展


### 参考

[decorator](https://aotu.io/notes/2016/10/24/decorator/index.html)