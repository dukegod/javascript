'use strict';
//函数可以用作值进行传递
function addFunc(f,n){
	return f(n);
}

function add(n){
	return n+7;
}

var ins = addFunc(add,3);
console.log(ins);



//构造函数才需要实例化
function Goufunc(x,y){
	this.x= x;
	this.y= y;
	console.log(x+':'+y);
}

var s= new Goufunc(34,10);
console.log(s);


//方法调用模式
var myObj = {//对象字面量
    param1: 1,
    param2: 2,
    sum: function (){
	//this关键字只带当前的对象
	return this.result = this.param1 + this.param2; 
    }
}
myObj.sum(); 


//函数调用模式
var add = function(a, b){
    return a + b;
}
add(1,2);  
//等同于
function add(a, b){
    return a + b;
}
add(1,2);//=>3


//构造器调用模式
var add = function() {
    this.name = "汇智网";
    this.sum = function (a, b){
        return a + b;
    }
}
var obj = new add(); //obj是一个对象
obj.sum(1,2);  //=>3


//apply调用模式
//JavaScript中函数也是对象，也可以拥有方法。其中call()和apply()用来间接的调用函数。称之为apply调用模式。
//apply方法让我们构建一个参数数组传递给调用函数。它也允许我们选择this的值。
// apply方法接收两个参数，第一个是要绑定给this的值，第二个就是一个参数数组。
//语法：函数名.apply(对象, 参数数组);

//示例：

var add = function (a, b) {
    return a + b;
}
 
add.apply(null,[1,2]);  //=>3

//call方法与apply方法类似，区别在call第二参数不是一个数组而是需要列举出来。
//比如上述中的代码用call方法来实现，如下

var add = function (a, b) {
    return a + b;
}
add.call(null,1,2); //=>3



