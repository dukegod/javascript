//creater oop
// 使用内置对象
// 使用JSON符号
// 自定义对象构造

// 使用内置对象（通过JavaScript语言原生对象的构造方法，实例化出一个新的对象）
// empty
var str0 = {};
var str1 = new String("initial string");
var str2 = "直接赋值的string";
// 初始化函数
var func = new Function();
// 初始化一个对象
var o = new Object();


// 使用JSON符号  JSON通过字符串形式来表达JavaScript的对象
var myObject = {
	name:"huihui",
	nickname:"duke"
}
console.log(myObject.name);
// 自定义高级对象构造有两种方式：
// 使用“this”关键字构造、
// 使用原型prototype构造

//使用this关键字定义构造的上下文属性
function Girl(){
	this.name = "big pig";
	this.age = 20;
	this.standing;
	this.bust;
	this.waist;
	this.hip;
}
//使用prototype
function Girl(){}
Girl.prototype.name = "big pig";
Girl.prototype.age = 20;
Girl.prototype.standing;
Girl.prototype.bust;
Girl.prototype.waist;
Girl.prototype.hip;
console.log((new Girl().name));

// 区别：
// 主要在于属性访问的顺序
// 当访问对象的属性或者方法是，将按照搜索原型链prototype chain的规则进行。首先查找自身的静态属性、方法，继而查找构造上下文的可访问属性、方法，最后查找构造的原型链
// “this” 与“prototype”定义的另一个不同点是属性的占用空间不同（this占用的多）
// this  执行的速度快
function Test()
{
	this.text = function()
	{
		console.log("message1111");
	}
}

Test.prototype.test = function()
	{
		console.log("defined by prototype");
	}

	var _o = new Test();
	_o.test();


