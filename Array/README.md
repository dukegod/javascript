# 数组总结

### 数组的基础用法：

[array 兼容性考虑](http://www.zhangxinxu.com/wordpress/2013/04/es5%E6%96%B0%E5%A2%9E%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95/#map)

+ 栈和队列：pop,push & shift() unshift()
+ 转换：concat()合并数组，join(",")合并成字符串
+ 排序从小到大：sort() resort()逆序排列。sort()，默认是按照字符串编码顺序排列，而不是数字大小
+ 复制&截取：slice(0)
+ 删除，插入，替换:splice

改变原数组的方法是 pop push shift unshift sort splice

不改变原数组的方法是 concat join slice


#### map

```
[].map(function(value, index, array) {});

```
兼容IE8以下

```
if (typeof Array.prototype.map != "function") {
  Array.prototype.map = function (fn, context) {
    var arr = [];
    if (typeof fn === "function") {
      for (var k = 0, length = this.length; k < length; k++) {      
         arr.push(fn.call(context, this[k], k, this));
      }
    }
    return arr;
  };
}

```
