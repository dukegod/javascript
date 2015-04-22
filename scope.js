//JavaScript 的函数定义是可以嵌套的，每一层是一个作用域，变量搜索顺序是从内到外

var dkarg = "animate";
(function(){
	console.log(dkarg);
	//js可以声明在后，也可以在前（声明提前性质）
	// 这个没有输出函数
	var dkarg = "duke";
})();


// 函数作用域的嵌套关系是定义时决定的，而不是调用时决定的，
var scope = 'top';
var f1 = function() {
 console.log(scope);
};
f1(); // 输出  top
var f2 = function() {
 var scope = 'f2';
 f1();
};
f2(); // 输出  top



// 函数声明方式的创建方式（有个函数声明提前）
say1();
function say1(){
	console.log("say1");
}

// 函数表达式(不可以函数声明提前) 下面的函数报错
say2();
var say2 = function(){
	console.log("say2");
}

