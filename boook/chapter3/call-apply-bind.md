# call, apply, bind

主要用来改变this的指向问题与参数的传递

## call, apply的基本方法

+ 不传，传入null,传递undefined， 函数中的this指向window对象，在node中为“global”
+ 传递另一个函数的函数名，函数中的this指向这个函数的引用
+ 传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象，如 String、Number、Boolean
+ 传递一个对象，函数中的this指向这个对象

## bind 基本方法

最大的区别是：bind在实现改变函数this的同时又不会自动执行目标函数

## 使用场景

### 使用toString()方法来检测对象类型

可以通过`toString()` 来获取每个对象的类型如：。

```js
function isNumber(s) {
  return Object.prototype.toString.call(s) === '[object Number]'
}
```

### 类数组转成数组

+ 可以实现`arguments`参数转为数组
+ dom节点转为数组

```js
Array.prototype.slice.call()
```

## 深入篇

手动实现`call`与`apply` 方法详见[JavaScript深入之call和apply的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)

