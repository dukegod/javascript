## js 优化路线

### 尽量使用原声

### 避免全局搜索

### 尽量少些循环次数

### 尽量不使用new 创建对象，用 字面量

### switch 换成对象字面量

```
switch (i){
	case '1': f1();
	case '2': f2();
	case '3': f3();
	case '4': f4();
}

// 换成这个样子

var i = {
	1: f1(),
	2: f2(),
	...
}


```
### setInterval

使用如果针对的是不断运行的代码，不应该使用setTimeout，而应该是用setInterval，因为setTimeout每一次都会初始化一个定时器，而setInterval只会在开始的时候初始化一个定时器。

### 条件分支可以用三木运算代之


