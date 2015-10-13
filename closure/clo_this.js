//
// 在作用中的闭包问题
//
//
var i = 1000;

var m = {
	i: 10 ,
	test: function(){
		console.log('test:'+this.i);

		return function(){
			console.log('bibao:'+ this.i);
		}

	}
}

m.test(); // test: 10

var mm = m.test();// 此时匿名函数指向最外层了
mm();// bibao: 1000 



