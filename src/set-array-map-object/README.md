# Set Map

## Set vs Array

### Set 

+ 不重复
+ 无序
+ key 指引

```js
const set = new Set()
set.add()
set.has()

//  out
{}
```

### Array

+ 可以重复

```js
const array = []
```

## Map vs Object

### Map

对象保存键值对

### Object

对象保存键值对

Objects 和 maps 的比较

+ 一个Object的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值，包括函数、对象、基本类型。
+ Map 中的键值是有序的，而添加到对象中的键则不是。因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。
+ 你可以通过 size 属性直接获取一个 Map 的键值对个数，而 Object 的键值对个数只能手动计算。
+ Map 可直接进行迭代，而 Object 的迭代需要先获取它的键数组，然后再进行迭代。
+ Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。虽然 ES5 开始可以用 map = Object.create(null) 来创建一个没有原型的对象，但是这种用法不太常见。
+ Map 在涉及频繁增删键值对的场景下会有些性能优势。
