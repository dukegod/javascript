hello();
function hello(){
	console.log('hello js');
}

var hello2 = function(){
	console.log('hello2 js');
}
hello2();

(function(e){
	console.log(e);
})(2);

// var result = (function () {
//             console.log(2);
//         })();

var auto = (function(){
	console.log('auto message');
})() 

var auto = (function(){
	console.log('auto message2');
}())



function person(callback,name,age){
	callback(name,age);
}
function output(name,age){
	console.log(name+':'+age);
}
new person(output,'zs',18);


function add(n){
	if(n<=1){
		return 1;
	}else{
		return n+add(n-1)
	}
}
// var i= add(4);
console.log(add(4));



// 构造函数
function Person(name,age){
	this.name=name;
	this.age=age;
}

Person.prototype.out=function(){
	var self=this;
	console.log(this.name+':'+this.age);
}

function Student(name,age,id){
	// Person.call(this,name,age);
	Person.apply(this,[name,age]);//或是用apply都行
	this.id=id;
}
Student.prototype.output=function(){
	var self=this;
	console.log(this.name+':'+this.age+';'+this.id);
}

new Person('lh',18).out();
new Student('KK',18,'XUESHENG').output();


function f(x){}
function f(x,y){}
function f(x,y,z){}



function Person1(name,age){
	this.name=name;
	this.age=age;
	this.say();
	// 这样也行（构造方法分配成员方法），比较喜欢原型法构造函数
	// this.say=function(){
	// 	console.log(name+age);
	// }
}
Person1.prototype.say=function(){
	var self = this;
	console.log(self+"self");
	console.log(self.name+self.age);
}
new Person1('lastname',100)



// 好的书写习惯

function add(x,y){
	total= x+y;
	return total;
}

var total= 50;
add(10,20);
console.log(total);