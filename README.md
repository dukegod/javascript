## javascript  

### 函数

+ func1.js

> 函数部分开始样式，构造函数，封装，继承，多态 


### 对象

一种重要的数据类型，自包含的数据集合，包含在对象中的数据可以通过两种形式访问：

1, 属性(property)
2, 方法(method)

对象可以看做有一些属性和方法一起构成的一个实体对象。

对象类型：

1, 内建对象

	既是数组对象，时间对象...

2, 宿主对象(host object)

	既是它运行环境的对象，一般就是浏览器对象

对象的创建

1， new object()

	var person = new Object();

	person.name = 'duke';
	person.age = 18;

	console.log(person.name);	

2, 对象字面量表示法(个人比较喜欢的方式，json对象)

	var p ={
		name: 'liuhui',
		age: 99,
		say: function(){
			console.log(this);
			return '6666给外部的调用返回一个数值';
		}
	}
	console.log(p.name);
	console.log(p.say()+'out');	

	return，返回一个数值，这样外部函数才能达到，也就是闭包的用法，以后再详细说明


## 原型链



## this 

+ 闭包总指向上一级
+ 构造函数中，指向本身
+ 引用时候，指向Windows














