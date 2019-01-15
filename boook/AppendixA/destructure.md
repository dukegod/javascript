# 解构

+ 扩展(...)

## 数组解构

### 复制数组

```js
const a1 = [1, 2];
// 浅复制a1
const a2 = [...a1];
const [...a2] = a1;
```

### 合并数组

```js
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]
// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```