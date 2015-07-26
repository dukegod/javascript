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

this在JavaScript用处千千万，基于自己研究和认识，今天做一个了断。

+ 全局，匿名函数调用
+ 方法调用
+ 闭包总指向上一级
+ 构造函数中，指向本身
+ 引用时候，指向Windows
+ apply调用

### 全局(Global context)

> In the global execution context (outside of any function), 
> this refers to the global object, whether in strict mode or not.

> 当在全局环境执行的时候，无论“严格模式”or“非严格模式”，this指向全局对象

	console.log(this.document === document); // true
	// In web browsers, the window object is also the global object:
	console.log(this === window); // true
	this.a = 37;//this.a 等价于 var a = 37;
	console.log(window.a); // 37

### 函数中严与非严格有区别

	function f1(){
	  return this;
	}
	f1() === window; // global object

严格

	function f2(){
	  "use strict"; // see strict mode
	  return this;
	}
	f2() === undefined;	

### 方法调用

**方法：**当一个函数被保存为对象的一个属性的时候。

	var num = {
		sum: 0,
		add: function(x,y){
			this.sum = x + y;
			console.log(this);
		}
	}
	num.add(2,3);
	console.log(num.sum);

this 可以取所属对象的上下文的方法称为**公共方法**，可以使属性，方法变成公开的属性方法(在构造函数，方法中用到)。

### 构造器调用	

需要使用new来调用，函数创建一个对象链接到prototype，this会绑定到那个新的对象上。

	var Person= function(name){
		this.name= name;
	} 
	Person.prototype.showname= function(){
		console.log(this);
		return this.name;
	}
	var p = new Person('duke');
	console.log('duke'+':'+p.showname());

### 函数调用

函数调用的时候会自动取得两个特殊的变量：this，arguments。js内部函数调用的时候，只能搜索到其活动对象为止，不可能直接访问外部函数中的变量。

解决方案：

如果该方法定义一个变量并给他赋值为this，那么内部函数就可以通过那个变量访问到this，我们可以把那个变量定义为that。

	var myfun= {
		num: 1,
		fadd: function(x){
			this.num= x+3
		}
	}
	myfun.double= function(){
		var that = this;
		console.log(that);
		var d= function(){
			that.num= 90;
			that.num2= 1999;//可以用作添加属性
			console.log(that);
		}
		d();
	}
	// 这个案例说明没有外部变量引入到内部函数中
	myfun.three= function(){
		console.log(this);
		console.log('three'+this.num);
		var that = this;//key point 
		var t = function(){
			console.log('this'+this);
			console.log('that'+that);
			console.log('inner'+this.num);
			console.log('inner'+that.num);
		}
		t();
	}
	myfun.fadd(4);
	console.log(myfun.num);
	myfun.double();
	console.log('double'+myfun.num);
	myfun.three();

### apply调用

接收两个参数，第一个绑定给this，第二个就是一个参数数组

[apply,call用法](http://segmentfault.com/a/1190000002983180#articleHeader5)

[apply](http://segmentfault.com/a/1190000000638443)

[javascript中的this应用](http://segmentfault.com/a/1190000000383544)

apply,call 延伸

> Where a function uses the this keyword in its body, 
> its value can be bound to a particular object in the call using the 
> call or apply methods that all functions inherit from Function.prototype.

	function add(c, d){
	  return this.a + this.b + c + d;
	}
	var o = {a:1, b:3};
	// The first parameter is the object to use as
	// 'this', subsequent parameters are passed as 
	// arguments in the function call
	add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16
	// The first parameter is the object to use as
	// 'this', the second is an array whose
	// members are used as the arguments in the function call
	add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

用在类型检测

	function bar() {
	  console.log(Object.prototype.toString.call(this));
	}
	bar.call(7); // [object Number]
	// 用apply较多，使用范围广
	function bar() {
	  console.log(Object.prototype.toString.apply(this));
	}
	bar.apply(7); // [object Number]

### As a DOM event handler（dom事件处理）

> When a function is used as an event handler, 
> its this is set to the element the event fired from 

> 用作事件的处理，给元素绑定方法

	// When called as a listener, turns the related element blue
	function bluify(e){
	  // Always true
	  console.log(this === e.currentTarget); 
	  // true when currentTarget and target are the same object
	  console.log(this === e.target);
	  this.style.backgroundColor = '#A5D9F3';
	}

	// Get a list of every element in the document
	var elements = document.getElementsByTagName('*');

	// Add bluify as a click listener so when the
	// element is clicked on, it turns blue
	for(var i=0 ; i<elements.length ; i++){
	  elements[i].addEventListener('click', bluify, false);
	}

[参考developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#As_a_DOM_event_handler)


总结，个人见解，欢迎批评指正





















