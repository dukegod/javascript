// this syn;

//global context

console.log(this.document === document); // true
// In web browsers, the window object is also the global object:
console.log(this === window); // true
this.a = 37;//this.a 等价于 var a = 37;
console.log(window.a); // 37

// 方法调用

var num = {
	sum: 0,
	nadd: function(x,y){
		this.sum = x + y;
		console.log(this);
	}
}
num.nadd(2,3);
console.log(num.sum);

// 构造器调用

var Person= function(name){
	this.name= name;
} 
Person.prototype.showname= function(){
	console.log(this);
	return this.name;
}
var p = new Person('duke');
console.log('duke'+':'+p.showname());



// 函数调用

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
		that.num2= 1999;//添加属性
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




function bar() {
  console.log(Object.prototype.toString.apply(this));
}

bar.apply(7); // [object Number]