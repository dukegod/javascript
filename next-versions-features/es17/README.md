es17新特性总结：

### Object (对象)

##### Object.value:   
它会返回 Object 所有属性的值，但不包括原型链中的值。

##### Object.entries   
与 Object.keys 相关，但它不仅返回键，而是以数组的方式返回键和值。这使得在循环中使用**对象或将对象转换为 Map** 等操作变得非常简单。

##### Object.getOwnPropertyDescriptors  
这个方法返回给定对象所有属性的详细信息（包括 get 和 set 方法）;  
允许将一个对象浅复制 / 克隆到另一个对象，同时也复制 getter 和 setter 函数。    
`Object.assign`将浅复制除原始源对象的 getter 和 setter 函数之外的所有东西。

###### `Object.assign` 和 `Object.getOwnPropertyDescriptors` 以及 `Object.defineProperties` 将原始对象复制到新对象的区别



### String（字符串）

##### String.prototype.padStart
允许将空字符串或其他字符串追加或前置到原始字符串的开头 
##### String.prototype.padEnd
允许将空字符串或其他字符串追加或前置到原始字符串的尾部


### async/await
