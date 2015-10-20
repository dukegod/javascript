//
//原型链的最好实现思路
//
//1 解决了 跳用两次的问题
// 
// 

// 寄生组合式继承模型 

function inheritComb(son,parent){
	var proto = Object(parent.prototype); // 创建对象
	proto.constructor = son;              // 增强对象
	son.prototype = proto;     						// 继承对象
}

