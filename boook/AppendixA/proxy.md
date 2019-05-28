# Proxy

通过构造函数可以创建 Proxy 对象，传入两个参数：

+ 被代理的目标对象：可以是任意类型的对象，包括数组、函数等，甚至是另一个 Proxy 对象。
+ 控制器对象：控制器是一个对象，内部定义零个或多个代理函数。若控制器为空对象，等同于直接访问目标对象。

事例：

```js
let obj = {
  x: 1
}
let proxy = new Proxy({}, obj);
console.log(proxy.x)
```

作为 prototype

```js
const obj = {
  x: 1
}
const proxy = new Proxy({}, {
  get(target, p) {
    console.log(target, p)
  }
})

Object.setPrototypeOf(obj, proxy);
console.log(obj.x)
console.log(obj.y);  // 由于y不在obj对象上，需要向上查找原型链
```

## 属性与方法

+ get
+ set
+ has
+ apply： 代理的对象必须是一个函数
